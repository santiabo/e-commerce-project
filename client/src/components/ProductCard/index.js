import React from 'react';
import { Link } from "react-router-dom";

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
  CategoryTag
} from './styles';

const ProductCard = ({ product, categories, reviews = { average: 4, } }) => {

  return (
    <Link to={"product/" + product.id} style={{
      textDecoration: "none"
    }}>
      <ProductCardWrapper>

        <ImageContainer>
          <img src={product.images[0]} alt={product.name} />
        </ImageContainer>

        <RowWrapper>
          {categories.map(category => <CategoryTag key={category.id}>{category.name}</CategoryTag>)}
          <Rating stars={Math.round(reviews.average)} />
        </RowWrapper>

        <Title>{product.name.substring(0, 60)} {product.name.length > 60 ? "..." : ""}</Title>

        <Price>$ {product.price}</Price>

        <ButtonsWrapper>
          <Button>Add to Cart</Button>
        </ButtonsWrapper>

      </ProductCardWrapper>
    </Link >
  );
};

export default ProductCard;