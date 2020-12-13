import React from 'react';
import { Link } from 'react-router-dom';

// Components
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar/NavBar'

// Styles
import '../routes/App.css';
import Carousel from '../components/Carousel/Carousel';


const Home = () => {
  return (
    <div className="App">
      <div style={{ margin: "0 10vw" }}>
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/">Builder</Link>
        <Link to="/">PcBuilts</Link>
        <Link to="/products">Products</Link>
        <Link to="/">About Us</Link>
          <SearchBar handleSubmit={(e) => {
            e.preventDefault();
            console.log("Enviado");
          }} />
        </NavBar>
        <Carousel/>
        
        
        
      </div>
    </div>
  );
};

export default Home;