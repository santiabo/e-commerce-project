import React from 'react';

const NavBar = ({ children }) => (
  <div className="container">
  <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      {children}
    </div>
  </nav>
</div>
);

export default NavBar;