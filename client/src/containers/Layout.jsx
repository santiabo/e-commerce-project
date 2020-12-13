import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;