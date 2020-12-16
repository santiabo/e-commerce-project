import React, { useEffect } from "react";
 import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/product"; 

// Components
import Rating from "../Rating";
import UnitsAmount from "../UnitsAmount";

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
  CategoriesTags
} from "./styles";



const CartItem =({match, reviews = { average: 4, total: 200 } })=> {


   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, []);

  const product = useSelector(state => state.product.productDetail);

  let keys = Object.keys(product);
 
  return (
    <ProductWrapper>
      <LeftSide>
        <ImageContainer>
            <img src={product.images[0]} alt={product.title} />
        </ImageContainer>
      </LeftSide>
      <RightSide>
        <CategoriesTags>
          {product.categories.map(category => (
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
        <ButtonsWrapper>
          <UnitsAmount />
        </ButtonsWrapper>
      </RightSide>
    </ProductWrapper>
  );
};

export default CartItem;