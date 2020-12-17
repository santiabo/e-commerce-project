import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div style={{ margin: "0 5vw", minHeight: "71vh", paddingBotton: "2rem" }}>
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;