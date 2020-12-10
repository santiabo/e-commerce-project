import React from 'react';
import './App.css';
import Product from '../Product';
import SearchBar from '../SearchBar';

function App() {
  return (
    <div className="App">
      <div style={{ margin: "0 10vw" }}>

        <Product />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
