import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemToCart } from "../../redux/actions/cart";

// Components
import Button from '../Button';
import Rating from '../Rating';

// Styled Components
import {
  ProductCardWrapper,
  ButtonsWrapper,
  ImageContainer,
  Price,
  Title,
  RowWrapper,
  CategoryTag,
  InfoBox,
  StyledLink,
  NoStockTag,
  StyledImg
} from './styles';

const ProductCard = ({ product, categories, reviews = { average: 4, } }) => {
 
  const count = 1;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setItemToCart(product, count));
  };

  const inStock = product.stock > 0;
  return (
    <ProductCardWrapper>

      <StyledLink to={"product/" + product.id}>
        <ImageContainer>
          {!inStock && <NoStockTag>No Stock</NoStockTag>}
          <StyledImg src={product.images[0]} alt={product.name} inStock={inStock} />
        </ImageContainer>
      </StyledLink >

      <InfoBox>

        <RowWrapper>
          {categories.map(category => <CategoryTag key={category.id}>{category.name}</CategoryTag>)}
          <Rating stars={Math.round(reviews.average)} />
        </RowWrapper>

        <StyledLink to={"product/" + product.id}>
          <Title>{product.name.substring(0, 55)} {product.name.length > 55 ? "..." : ""}</Title>
        </StyledLink>

        <Price>$ {product.price}</Price>

        <ButtonsWrapper>
          <Button disabled={!inStock} onClick={handleClick}>Add to Cart</Button>
        </ButtonsWrapper>

      </InfoBox>

    </ProductCardWrapper>
  );
};

export default ProductCard;