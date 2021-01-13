import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Styled component
import { MainContent } from './styles';

const Layout = ({ children }) => (
  <>
    <Header />
    <MainContent /* style={{ margin: "0 5vw" }} */>
      {children}
    </MainContent>
    <Footer />
  </>
);

export default Layout;