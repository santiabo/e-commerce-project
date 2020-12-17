import React from 'react';
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
  const cart =JSON.parse(localStorage.getItem('cart'))
  return (
    <nav>
      <NavWrapper>
        <NavLink to='/'><Home /></NavLink>
        <NavWrapper2>

          <ImageContainer>
            <NavLink to='/'><Login /> </NavLink>
          </ImageContainer>

          <ImageContainer>
            <NavLink to='/'><Register /> </NavLink>
          </ImageContainer>

          <ImageContainer>
          <NavLink to='/cart' className="linkIcons">
                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                            {cart &&<span className="cart-counter">{cart.length}</span>}
                        </NavLink>
          </ImageContainer>

        </NavWrapper2>
      </NavWrapper>
      <NavBar />
    </nav>
  );
};

export default Header;