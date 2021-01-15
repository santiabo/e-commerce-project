import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaRegCheckCircle, FaCaretDown, FaCaretUp } from "react-icons/fa";
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

import './cart.css';
import { UnitsAmountWrapper } from "../UnitsAmount/styles";
import Cart from '../../assets/icons/shopping_cart.svg';
import { addUserCart } from "../../redux/actions/user";





const CartItem = () => {

  const dispatch = useDispatch();
  const { cart, cartAmount } = useSelector(state => state.cart);
  const { isUser, user } = useSelector(state => state.user);


  const getTotal = () => {
    return Number(cart.reduce((sum, { price, quantity }) => sum + Number(price) * quantity, 0).toFixed(2));
  };

  if (!cartAmount) {
    return (
      <section>
        <div className="section-div">
          <form>
            <div className="cart-top">
              <h1 className="cart-title">Shopping Cart</h1>
            </div>
            <div className="empty-Cart">
              <div className="empty-body"></div>
              <div className="message">
                <div className="info-msg">
                  <p>
                    <strong>Oh... seems like the cart is empty...</strong>
                    <br />
                    <br />
                    Looking for shopping ideas? Let's head to <Link id="lnk-under">Best Deals</Link> and start a shopping spree!
                    <br />
                    <br />
                    Or
                    <Link id="lnk-under" to="/login"> Log in</Link> and pick up from where you have left off last time.
                  </p>
                </div>
              </div>
              <div className="div-side">
                <div className="summary-side">
                  <h3 className="summary-title">Summary</h3>
                  <div className="summary-wrapper">
                    <div className="sum-content">
                      <ul>
                        <li className="content-global">
                          <label>Est. Total: </label>
                          <span>$ <strong>{getTotal()}</strong></span>
                        </li>
                      </ul>
                      <div className="checkout-action">
                        <button className="btn btn-primary btn-wide" disabled>
                          To Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      /* <section className='empty-cart'>
        <header>
          <h2 className='header'>YOUR CART</h2>
          <h4 className='header'>IS CURRENTLY EMPTY!!</h4>
          <div className="content">
            <img className="cart" src={Cart} alt="Empty cart" />
          </div>
        </header>
      </section> */
    );
  }

  const removeFromCart = (idToRemove) => {
    dispatch(removeItemFromCart(idToRemove));
    isUser && dispatch(addUserCart(user.id));
  };

  const clearAllItems = () => {
    dispatch(clearCart());
    isUser && dispatch(addUserCart(user.id));
  };




  return (
    <section className='card-cart'>
      <div className="section-cart">
        <div className="section-summary">
          <form>
            <div className="cart-top">
              <div className="top-left">
                <h1 className="cart-title">
                  Shopping Cart <span className="item-amnt"> ({cartAmount} Item)</span>
                </h1>
                <div className="action-cart">
                  <button className="btn no-border"> <FaRegCheckCircle className="check-remove" /> Buy Now</button>
                  <button className="btn no-border" onClick={() => clearAllItems()}> <FaTrashAlt className="check-remove" /> Remove All</button>
                </div>
              </div>
            </div>
            <div className="full-cart">
              <div className="row-body">
                <div className="items-wrapper">
                  {
                    cart.map((item) =>

                      <div className="item">
                        <div className="item-container">
                          <Link className="item-img">
                            <img src={item.images[0]} alt={item.name} />
                          </Link>
                          <div className="item-info">
                            <Link id="lit" className="item-title">{item.name}</Link>
                            <p>{item.categories.map(category => (
                              <strong>{category.name}</strong>
                            ))}</p>
                            <p className="item-dptn" >{item.description}</p>
                          </div>
                          {item.quantity && <div className="item-qty">
                            <input type="text" maxLength="3" value={item.quantity} className="form-text" />
                            <button>
                              <FaCaretUp />
                            </button>
                            <button>
                              <FaCaretDown />
                            </button>
                          </div>}

                          <div className="item-price">
                            <ul className="price">
                              <li className="price-current">
                                $
                                <strong>{Number(item.price * item.quantity).toFixed(2)}</strong>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="item-action">
                          <div className="action-cart">
                            <button type="button" className="btn btn-mini btn-tertiary"> <FaRegCheckCircle className="check-remove" /> Buy Now
                          </button>
                          </div>
                          <div className="action-cart">
                            <button type="button" className="btn btn-mini btn-tertiary" onClick={() => removeFromCart(item.id)}> <FaTrashAlt className="check-remove" /> Remove </button>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <header>
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
                <input type="button" value='-' onClick={() => item.quantity > 1 && dispatch(decrementItem(item.id)) && isUser && dispatch(addUserCart(user.id))} />
                <input type="button" value={item.quantity} />
                <input type="button" value='+' onClick={() => dispatch(incrementItem(item.id)) && isUser && dispatch(addUserCart(user.id))} />
              </UnitsAmountWrapper>
              <Button onClick={() => removeFromCart(item.id) && isUser && dispatch(addUserCart(user.id))}>
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
      </footer> */}
    </section>
  );
};

export default CartItem;