import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, clearCart } from "../../redux/actions/cart";

// Components
import Button from "../Button";
import UnitsAmount from "../UnitsAmount";

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
  CategoriesTags
} from "./styles";



const CartItem = () => {

  const dispatch = useDispatch();
  const { cart, cartAmount } = useSelector(state => state.cart);

  if (!cartAmount) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>Your cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
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
        <h2>Shipping Cart</h2>
      </header>
      {console.log('Cart', cart)}
      {cart.map((item) =>
        <div>
          {console.log('item:', item)}
          <ProductWrapper>
            <LeftSide>
              <ImageContainer>
                <img src={item.images[0]} width={150} alt={item.name} />
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
              <Price>
                $ {item.price}
              </Price>
              <ButtonsWrapper>
                {/* <UnitsAmount /> */}
                <Button onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </ButtonsWrapper>
            </RightSide>
          </ProductWrapper>
        </div>
      )}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${getTotal()}</span>
          </h4>
        </div>
        <Button onClick={() => clearAllItems()}>
          clear cart
        </Button>
      </footer>
    </section>
  );
};

export default CartItem;