import React from "react";
import { Link } from "react-router-dom";
import './order.css'

const Order = ({ id, status, img, name, price, quantity, totalPrice }) => {


  return (
    <>
      <section className='order-section'>
        <header className='order-header'>
          <div className='header-description-container'>
            <div className='header-button-container'>
              <button className='order-button'>
              <Link to='/cart'>Edit Order</Link> 
              </button>
            </div>
            <h2>#orderId{id}</h2>
            <h1>Status: {status}</h1>
            <h4>Deliver date 15-01-2021</h4>
          </div>
        </header>
        <main className='order-main'>
          <div className='order-img'>
            <img className='order-img' src={img} alt='product1' />
          </div>
          <div className='order-description'>
            <h4>{name}</h4>
            <h3>SubTotal</h3>
            <h4>Price: {price} x {quantity} unit</h4>
          </div>
        </main>
        <footer className='order-footer'>
          <h4>Paymetn method: cash</h4>
          <h4>Delivery Cost: $ 0 </h4>
          <h3>Total: {totalPrice}</h3>
        </footer>
      </section>
    </>
  );
};

export default Order;