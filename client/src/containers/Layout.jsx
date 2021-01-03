import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <div /* style={{ margin: "0 5vw" }} */>
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;