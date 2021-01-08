import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Order from '../components/Order/Order'

const OrderContainer = () => {
  const history = useHistory()

  const { isUser, userCart } = useSelector(state => state.user)

  useEffect(() => {
    if (!isUser) {
      history.push('/');
    }
  }, [isUser])

  return (
    <div>
      <h1>User Orders</h1>
      {userCart.map((i) => 
        <Order
          id={i.order.id}
          status={i.order.status}
          img={i.product.images[0]}
          name={i.product.name}
          price={i.product.price}
          quantity={i.quantity}
          totalPrice={i.price} />
      )
      }
    </div>
  );
};

export default OrderContainer;