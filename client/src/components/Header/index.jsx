import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Home } from "../../assets/icons/logo.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import { ReactComponent as Login } from "../../assets/icons/login3.svg";
import { ReactComponent as Register } from "../../assets/icons/register3.svg";


//Styled components

import { ImageContainer, NavWrapper, NavWrapper2, DivWrapper } from "./styles";

const Header = () => {
  return (

    <NavWrapper>
      <DivWrapper>
        <NavLink to='/'><Home /></NavLink>
      </DivWrapper>
      <NavWrapper2>
        <ImageContainer>
          <NavLink to='/'><Login /> </NavLink>
        </ImageContainer>
        <ImageContainer>
          <NavLink to='/'><Register /> </NavLink>
        </ImageContainer>
        <ImageContainer>
          <NavLink to='/products'><Cart /></NavLink>
        </ImageContainer>
      </NavWrapper2>
    </NavWrapper>


  )
};

export default Header;