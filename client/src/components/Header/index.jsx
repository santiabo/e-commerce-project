import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

// Components
import NavBar from './navBar';
import LoggedInUser from '../LoggedInUser';

//Styled Components

import { ImageContainer, NavWrapper, NavWrapper2, LoginRegisterLinks } from "./styles";

import { ReactComponent as Home } from "../../assets/icons/logo.svg";
import { ReactComponent as CartLogo } from "../../assets/icons/cart.svg";

const Header = () => {
  const cartAmount = useSelector(state => state.cart.cartAmount);
  const isUser = useSelector(state => state.user.isUser);

  return (
    <nav>
      <NavWrapper>
        <NavLink to='/'><Home /></NavLink>
        <NavWrapper2>
          {!isUser ?
            <>
              <ImageContainer>
                <LoginRegisterLinks to='/login'>Log In</LoginRegisterLinks>
              </ImageContainer>

              <ImageContainer>
                <LoginRegisterLinks to='/register'>Register</LoginRegisterLinks>
              </ImageContainer>
            </>
            :
            <>
              <ImageContainer>
                <LoggedInUser />
              </ImageContainer>
            </>
          }
          <ImageContainer>
            <LoginRegisterLinks to='/cart'>
              <CartLogo />
              {cartAmount && <span className="cart-counter">{cartAmount}</span>}
            </LoginRegisterLinks>
          </ImageContainer>

        </NavWrapper2>
      </NavWrapper>
      <NavBar />
    </nav>
  );
};

export default Header;
