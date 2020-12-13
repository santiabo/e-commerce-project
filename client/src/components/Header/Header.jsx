import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/statics/logo.jpeg';
import './Header.css'

const Header = () => (
  <nav class="navbar navbar-light bg-light">
    <div className="container-fluid">
      <Link to='/'>
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="row">        
        <ul>
          <li><a href="/">Cuenta</a></li>
          <Link to='/login'>
            <li>Iniciar sesión</li>
          </Link>
          <Link to="/admin">
            <li>Admin</li>
          </Link>
        </ul>
      </div>
    </div>
  </nav>
);
export default Header;