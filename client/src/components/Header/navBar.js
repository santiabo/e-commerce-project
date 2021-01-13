import React from 'react';
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/product";

import SearchBar from '../SearchBar/index';

import { NavWrapper3, StyledLink } from "./styles";

const NavBar = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e, search) => {
    e.preventDefault();
    dispatch(getProducts(search));
    // history.push("/products");
  };

  return (
    <nav>
      <NavWrapper3>
    
        <StyledLink to='/'>PC Builder</StyledLink>

        <StyledLink to='/products'>Products</StyledLink>

        <StyledLink to='/'>About Us</StyledLink>        

        <SearchBar handleSubmit={handleSubmit} />
      </NavWrapper3>
    </nav>
  );
};

export default NavBar;