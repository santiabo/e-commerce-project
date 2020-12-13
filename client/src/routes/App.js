import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Layout>
       
        <Switch>
          <Route path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
