import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from "../redux/actions/product";
import { getCategories } from "../redux/actions/category";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Catalogue from '../components/Catalogue';
import ProductTable from '../components/ProductTable';
import Product from '../components/Product';
import UserRegister from '../components/RegisterForm';
import EditProfile from '../components/EditProfile';

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);


  return (
    <BrowserRouter>
      <Layout>

        <Switch>

          <Route exact path="/user/account">
            <EditProfile />
          </Route>

          <Route path="/register">
            <UserRegister />
          </Route>

          <Route exact path='/' component={Home} />

          <Route path='/admin' component={ProductTable} />

          <Route path='/products' >
            <Catalogue />
          </Route>

          <Route path='/product/:id' render={({ match }) => <Product match={match} />} />

          <Route component={NotFound} />

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
