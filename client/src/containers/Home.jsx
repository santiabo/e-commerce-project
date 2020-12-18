import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Product from '../components/Product';
import Catalogue from '../components/Catalogue';


// Styles
import '../routes/App.css';


const Home = () => {

  return (
    <div className="App">



      <Switch>

        <Route path="/products">
          <Catalogue />
        </Route>

        <Route path="/product/:id">
          <Product />
        </Route>

      </Switch>
    </div>
  );
};
export default Home;
