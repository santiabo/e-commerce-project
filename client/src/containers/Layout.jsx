import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="container">
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;