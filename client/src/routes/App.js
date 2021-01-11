import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../redux/actions/product";
import { getCategories } from "../redux/actions/category";
import { getCartItemsFromLocalStorage } from "../redux/actions/cart";
import { autoSignInUser } from "../redux/actions/user";
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

// Components
import Layout from '../containers/Layout';
import Home, { SlideData } from '../containers/Home';
import NotFound from '../containers/NotFound';
import Catalogue from '../components/Catalogue';
import ProductTable from '../components/ProductTable';
import Product from '../components/Product';
import TableOrder from '../components/OrderTable';
import UserRegister from '../components/RegisterForm';
import EditProfile from '../components/EditProfile';
import Cart from '../components/Cart/Cart';
import LoginUser from '../components/LoginForm';
import userTable from '../components/UserTable';
import OrderContainer from '../containers/OrderContainer';
import ForcePasswordChangePage from '../containers/ForcePasswordChangePage';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoSignInUser());
    dispatch(getProducts());
    dispatch(getCategories());
    dispatch(getCartItemsFromLocalStorage());
  }, [dispatch]);

  const { loading } = useSelector(state => state.user);

  if (loading) return <h1>Loading ...</h1>;

  return (

    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home slides={SlideData} />
          </Route>

          <Route exact path="/user/account" component={EditProfile} />

          <Route exact path='/changePassword' component={ForcePasswordChangePage} />

          <Route exact path='/login' component={LoginUser} />

          <Route path="/register" component={UserRegister} />

          <Route path='/admin' component={ProductTable} />

          <Route path='/orders' component={TableOrder} />

          <Route path='/users' component={userTable} />

          <Route path='/user/orders' component={OrderContainer} />

          <Route path='/products' component={Catalogue} />

          <Route path='/cart' component={Cart} />

          <Route path='/product/:id' render={({ match }) => <Product match={match} />} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;