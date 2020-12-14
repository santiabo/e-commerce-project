import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/product";

import SearchBar from '../SearchBar/index';

import { NavWrapper3, StyledLink } from "./styles";

const NavBar = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e, search) => {
    e.preventDefault();
    dispatch(getProducts(search));
    history.push("/products");
  };

  return (
    <nav>
      <NavWrapper3>

        <StyledLink to='/'>Builder</StyledLink>
        <StyledLink to='/'>Pc Builts</StyledLink>
        <StyledLink to='/products'>Products</StyledLink>
        <StyledLink to='/'>About us</StyledLink>
        <StyledLink to='/admin'>Admin</StyledLink>

        <SearchBar handleSubmit={handleSubmit} />
      </NavWrapper3>



    </nav>
  );
};

export default NavBar;