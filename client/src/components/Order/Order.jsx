import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

// Components
import Button from "../Button";

// StyledComponents
import {
  ProductWrapper,
  LeftSide,
  RightSide,
  ImageContainer,
  Title,
  Description,
  CategoryTag,
  Price,
  ButtonsWrapper,
  CategoriesTags,
} from "./styles";


const Order = () => {

  const dispatch = useDispatch();
  const { cart }  = useSelector(state => state.user.user);
  console.log('state',cart)

  const getTotal = () => {
    return Number(cart.reduce((sum, { price, quantity }) => sum + Number(price) * quantity, 0).toFixed(2));
  };

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2 className='header'>Order</h2>
      </header>
      {cart.map((item) =>
        <ProductWrapper>
          <LeftSide>
            <ImageContainer>
              <img src={item.images[0]} alt={item.name} />
            </ImageContainer>
          </LeftSide>
          <RightSide>
            <CategoriesTags>
              {item.categories.map(category => (
                <CategoryTag>{category.name}</CategoryTag>
              ))}
            </CategoriesTags>
            <Title>{item.name}</Title>
            <Description>
              {item.description}
            </Description>
            {item.quantity && <h4>Units: {item.quantity}</h4>}
            <Price>
              $ {Number(item.price * item.quantity).toFixed(2)}
            </Price>
          </RightSide>
        </ProductWrapper>
      )}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4 className='price'>
            Total <span>${getTotal()}</span>
          </h4>
        </div>
        <ButtonsWrapper>
          <Button className='nav-button' as="a" href='/cart'>
            EDIT ORDER
        </Button>
          <Button className='nav-button'>
           BUY NOW!
        </Button>
        </ButtonsWrapper>
      </footer>
    </section>
  );
};

export default Order;