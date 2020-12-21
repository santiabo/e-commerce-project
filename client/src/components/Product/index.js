import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/product";
import { setItemToCart, decrementItem, incrementItem } from "../../redux/actions/cart";


// Components
import ImagesColumn from "../ImagesColumn";
import Rating from "../Rating";
import Button from "../Button";

// StyledComponents
import {
  ProductWrapper,
  LeftSide,
  RightSide,
  ImageContainer,
  RatingWrapper,
  Title,
  Description,
  CategoryTag,
  Price,
  ButtonsWrapper,
  CategoriesTags,
} from "./styles";
import { UnitsAmountWrapper } from "../UnitsAmount/styles";

const Product = ({ match, reviews = { average: 4, total: 200 } }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, []);

  let product = useSelector(state => state.product.productDetail);
  const quantity = product.quantity || 1;
  console.log('product', product)

  const increment = () => {  
    console.log('entre')  
    product = {
      ...product,
      quantity: product.quantity +1
    };
    console.log(product)
    return product;
  }

  const decrement = () => {    
    product = {
      ...product,
      quantity: product.quantity - 1
    };
    return product;
  }

  

  const handleClick = () => {
    dispatch(setItemToCart(product, quantity));
  };

  const inStock = product.stock > 0;

  let keys = Object.keys(product);
  return (
    <ProductWrapper>
      <LeftSide>
        <ImagesColumn product={product} />
        <ImageContainer>
          {
            keys.length &&
            <img src={product.images[0]} alt={product.title} />
          }
        </ImageContainer>
      </LeftSide>
      <RightSide>
        <CategoriesTags>
          {keys.length && product.categories.map(category => (
            <CategoryTag>{category.name}</CategoryTag>
          ))}
        </CategoriesTags>
        <Title>{product.name}</Title>
        <RatingWrapper>
          <Rating stars={Math.round(reviews.average)} />
          <span>{reviews.average} ({reviews.total} reviews)</span>
        </RatingWrapper>
        <Description>
          {product.description}
        </Description>
        <Price>
          $ {product.price}
        </Price>
        <h4>Units: {product.quantity || 1}</h4>
        <ButtonsWrapper>
          <UnitsAmountWrapper>
            <input type="button" value='-' onClick={() => product.quantity > 1 && decrement()} />
            <input type="button" value={product.quantity || 1} />
            <input type="button" value='+' onClick={() => increment()} />
          </UnitsAmountWrapper>
          <Button disabled={!inStock} onClick={handleClick}>Add to Cart</Button>
        </ButtonsWrapper>
      </RightSide>
    </ProductWrapper>
  );
};

export default Product;