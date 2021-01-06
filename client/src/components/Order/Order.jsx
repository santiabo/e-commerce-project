import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import './order.css'


const Order = () => {

  return (
    <section className='order-section'>
      <header className='order-header'>
        <div className='header-description-container'>
        <div className='header-button-container'>
          <button className='order-button'>See Detail</button>
        </div>
          <h1>Status: on-cart</h1>
          <h4>Deliver date 15-01-2021</h4>
        </div>
      </header>
      <main className='order-main'>
        <div className='order-img'>
          <img className='order-img' src="https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg" alt='product1' />
        </div>
        <div className='order-description'>
          <h4>AMD Ryzen 5 3600XT 6-Core 3.8 GHz Socket AM4 95W</h4>
          <h3>SubTotal</h3>
          <h4>Price: 356.99 x 1 unit</h4>
        </div>
      </main>
      <footer className='order-footer'>
        <h4>Paymetn method: cash</h4>
        <h4>Delivery Cost: $ 0 </h4>
        <h3>Total: 356.99</h3>
      </footer>
    </section>
  );
};

export default Order;