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
              <h1 className="cart-title">Shopping Cart
              <span className="row-title-note">
                  ({cartAmount} Items)
                    </span>
              </h1>
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
    <section className="page-section">
      <div className="page-section-inner">
        <div className="row has-flex-summary">
          <form>
            <div id="cart-top" className="row-top display-flex justify-content-space-between width-100">
              <div className="row-top-left flex-wrap width-100">
                <h1 className="row-title">
                  Shopping Cart <span className="row-title-note">
                    ({cartAmount} Items)
                    </span>
                </h1>
                <div className="display-flex">
                  <button type="button" className="btn no-border"> <FaRegCheckCircle className="fa fa-checkcircle" /> Buy Now
                  </button>
                  <button type="button" className="btn no-border" onClick={() => clearAllItems()}> <FaTrashAlt className="fa fa-trash" /> Remove All
                  </button>
                </div>
              </div>
            </div>
            <div className="row-inner">
              <div className="row-body">
                <div className="item-cells-wrap tile-cells items-list-view absolute-img-cells">
                  {
                    cart.map((item) =>
                      <div className="item-cell">
                        <div className="item-container">
                          <Link className="item-img" target="_blank">
                            <img src={item.images[0]} alt={item.name} />
                          </Link>
                          <div className="item-info">
                            <Link id="a" className="item-title" to={"product/" + item.id}>
                              {item.name}
                            </Link>
                            {item.categories.map(category => (
                              <p>
                                <strong>{category.name}</strong>
                              </p>
                            ))}
                            <ul className="item-description">
                              <p>{item.description}</p>
                            </ul>
                          </div>
                          <div className="item-qty">
                            <div className="qty-box">
                              <input value={item.quantity} className="qty-box-input" />
                              <button type="button" className="qty-box-up" onClick={() => dispatch(incrementItem(item.id)) && isUser && dispatch(addUserCart(user.id))}>
                                <FaCaretUp />
                              </button>
                              <button type="button" className="qty-box-down" onClick={() => item.quantity > 1 && dispatch(decrementItem(item.id)) && isUser && dispatch(addUserCart(user.id))}>
                                <FaCaretDown />
                              </button>
                            </div>
                          </div>
                          <div className="item-action">
                            <ul className="price">
                              <li className="price-current">
                                $
                                <strong>{Number(item.price * item.quantity).toFixed(2)}</strong>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="item-sub-container no-border-top flex-wrap">
                          <div className="display-flex">
                            <button type="button" className="btn btn-mini btn-tertiary" onClick={() => removeFromCart(item.id) && isUser && dispatch(addUserCart(user.id))}>
                              <FaTrashAlt className="fa fa-trash" /> Remove
                          </button>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
              <div></div>
              <div className="row-side">
                <div className="summary-side">
                  <h3 className="summary-title fixed-hide">Summary</h3>
                  <div className="summary-wrap">
                    <div className="summary-content">
                      <ul>
                        <li className="summary-content-global">
                          <label>
                            Total Price:
                          </label>
                          <span>
                            $<strong>{getTotal()}</strong>
                          </span>
                        </li>
                      </ul>
                      <div className="summary-actions">
                        <button type="button" className="btn btn-primary btn-wide">
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