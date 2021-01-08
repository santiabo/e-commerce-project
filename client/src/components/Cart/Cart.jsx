import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, clearCart, incrementItem, decrementItem } from "../../redux/actions/cart";

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

import './cart.css'
import { UnitsAmountWrapper } from "../UnitsAmount/styles";
import Cart from '../../assets/icons/shopping_cart.svg';




const CartItem = () => {

  const dispatch = useDispatch();
  const { cart, cartAmount } = useSelector(state => state.cart);

  if (!cartAmount) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2 className='header'>YOUR CART</h2>
          <h4 className='header'>IS CURRENTLY EMPTY!!</h4>
          <div className = "content">
          <img className = "cart" src={Cart}/>
          </div>
        </header>
      </section>
    );
  }

  const removeFromCart = (idToRemove) => {
    dispatch(removeItemFromCart(idToRemove));
  };

  const clearAllItems = () => {
    dispatch(clearCart());
  };

  const getTotal = () => {
    return Number(cart.reduce((sum, { price, quantity }) => sum + Number(price) * quantity, 0).toFixed(2));
  };


  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2 className='header'>Shipping Cart</h2>
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
            <ButtonsWrapper>
              <UnitsAmountWrapper>
                <input type="button" value='-' onClick={() => item.quantity > 1 && dispatch(decrementItem(item.id))} />
                <input type="button" value={item.quantity} />
                <input type="button" value='+' onClick={() => dispatch(incrementItem(item.id))} />
              </UnitsAmountWrapper>
              <Button onClick={() => removeFromCart(item.id)}>
                Remove
                </Button>
            </ButtonsWrapper>
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
          <Button className='nav-button' onClick={() => clearAllItems()}>
            CLEAR CART
        </Button>
          <Button className='nav-button' as="a" href='/register'>
           BUY NOW!
        </Button>
        </ButtonsWrapper>
      </footer>
    </section>
  );
};

export default CartItem;