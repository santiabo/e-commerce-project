import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

// Components
import NavBar from './navBar';

//Styled Components

import { ImageContainer, NavWrapper, NavWrapper2 } from "./styles";

import { ReactComponent as Home } from "../../assets/icons/logo.svg";
import { ReactComponent as CartLogo } from "../../assets/icons/cart.svg";
import { ReactComponent as Login } from "../../assets/icons/login3.svg";
import { ReactComponent as Register } from "../../assets/icons/register3.svg";

const Header = () => {
  const cartAmount = useSelector(state => state.cart.cartAmount);
  return (
    <nav>
      <NavWrapper>
        <NavLink to='/'><Home /></NavLink>
        <NavWrapper2>

          <ImageContainer>
            <NavLink to='/'><Login /> </NavLink>
          </ImageContainer>

          <ImageContainer>
            <NavLink to='/register'><Register /> </NavLink>
          </ImageContainer>

          <ImageContainer>
            <NavLink to='/cart'> <CartLogo />
              {cartAmount && <span className="cart-counter">{cartAmount}</span>}
            </NavLink>
          </ImageContainer>

        </NavWrapper2>
      </NavWrapper>
      <NavBar />
    </nav>
  );
};

export default Header;