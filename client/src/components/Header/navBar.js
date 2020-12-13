import React  from 'react';

import SearchBar from '../SearchBar/index'

import {  NavWrapper3, StyledLink } from "./styles";

const NavBar = () => {
  return (
<nav>
    <NavWrapper3>
      
      <StyledLink to ='/'>Builder</StyledLink>
      <StyledLink to='/'>Pc Builts</StyledLink>
      <StyledLink to='/products'>Products</StyledLink>
      <StyledLink to='/'>About us</StyledLink>
      <StyledLink to='/admin'>Admin</StyledLink>
      
      <SearchBar handleSubmit={(e) => {
          e.preventDefault();
          console.log("Enviado");
        }} />
    </NavWrapper3>
      
   

</nav>
  )
};

export default NavBar;