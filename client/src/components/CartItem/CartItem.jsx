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

  const cart = useSelector(state => state.cart.items);

  let keys = Object.keys(cart);
 
  return (
    <ProductWrapper>
      <LeftSide>
        <ImagesColumn cart={product} />
        <ImageContainer>
          {
            keys.length &&
            <img src={cart.images[0]} alt={cart.title} />
          }
        </ImageContainer>
      </LeftSide>
      <RightSide>
        <CategoriesTags>
          {keys.length && cart.categories.map(category => (
            <CategoryTag>{category.name}</CategoryTag>
          ))}
        </CategoriesTags>
        <Title>{cart.name}</Title>
        <RatingWrapper>
          <Rating stars={Math.round(reviews.average)} />
          <span>{reviews.average} ({reviews.total} reviews)</span>
        </RatingWrapper>
        <Description>
          {cart.description}
        </Description>
        <Price>
          $ {cart.price}
        </Price>
        <ButtonsWrapper>
          <UnitsAmount />
        </ButtonsWrapper>
      </RightSide>
    </ProductWrapper>
  );
};

export default CartItem;