import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, clearCart } from "../../redux/actions/cart";

// Components
import Button from "../Button";
import UnitsAmount from "../UnitsAmount"


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



const CartItem = () => {

  const dispatch = useDispatch();
  const { cart, cartAmount } = useSelector(state => state.cart);

  if (!cartAmount) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2 className= 'header'>Your cart</h2>
          <h4 className= 'header'>is currently empty</h4>
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
    return Number(cart.reduce((sum, { price }) => sum + Number(price), 0).toFixed(2));
  };

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2 className= 'header'>Shipping Cart</h2>
      </header>     
      {cart.map((item) =>
         <ProductWrapper>
            <LeftSide>
              <ImageContainer>
                <img src={item.images[0]}  alt={item.name} />
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
                $ {item.price * item.quantity}
              </Price>
              <ButtonsWrapper>
               
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
        <Button onClick={() => clearAllItems()}>
          CLEAR CART
        </Button>
      </footer>
    </section>
  );
};

export default CartItem;