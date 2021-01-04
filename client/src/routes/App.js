import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from "../redux/actions/product";
import { getCategories } from "../redux/actions/category";
import { getCartItemsFromLocalStorage } from "../redux/actions/cart";
import { getOrders } from '../redux/actions/order';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Layout from '../containers/Layout';
import Home, { SlideData } from '../containers/Home';
import NotFound from '../containers/NotFound';
import Catalogue from '../components/Catalogue';
import ProductTable from '../components/ProductTable';
import Product from '../components/Product';
import TableOrder from '../components/TableOrder';
import UserRegister from '../components/RegisterForm';
import EditProfile from '../components/EditProfile';
import Cart from '../components/Cart/Cart';
import LoginUser from '../components/LoginForm';
import Order from '../components/Order/Order'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    dispatch(getCartItemsFromLocalStorage());
    dispatch(getOrders());
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home slides={SlideData} />
          </Route>

          <Route exact path="/user/account" component={EditProfile} />

          <Route exact path='/login' component={LoginUser} />

          <Route path="/register" component={UserRegister} />

          <Route path='/admin' component={ProductTable} />

          <Route path='/orders' component={TableOrder} />

          <Route path='/products' component={Catalogue} />

          <Route path='/cart' component={Cart} />

          <Route path='/order' component={Order} />

          <Route path='/product/:id' render={({ match }) => <Product match={match} />} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;