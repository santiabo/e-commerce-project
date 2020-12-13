import React from 'react';
import SearchBar from '../SearchBar/index'

import {  NavWrapper3 } from "./styles";

const NavBar = () => {
  return (
<nav>
    <NavWrapper3>
      
      <button>Builder</button>
      <button>Pc Builts</button>
      <button>Products</button>
      <button>About us</button>
      <SearchBar handleSubmit={(e) => {
          e.preventDefault();
          console.log("Enviado");
        }} />
    </NavWrapper3>
      
   

</nav>
  )
};

export default NavBar;