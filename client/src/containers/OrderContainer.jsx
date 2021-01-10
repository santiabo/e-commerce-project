
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Order from '../components/Order/Order'
import { getUserOrders } from '../redux/actions/order';


const OrderContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory(); 
  const  user = useSelector(state => state.user)
  const  isUser = useSelector(state => state.user.isUser)
  console.log("USER ID >>>>>>> ", user.user.id)
  useEffect(() => {
    if (!isUser) {
      history.push('/');
    }
  }, [])

  useEffect(() => {
   dispatch(getUserOrders(user.user.id))
  }, [])

  const userOrders = useSelector(state => state.order.userOrders);
  console.log("USER ORDERS >>>>> ", userOrders)

  
  const getTotal = (userOrders) => {
    return Number(userOrders.reduce((acc, orderLine)=> {
      acc = orderLine.reduce((acc, el)=> {
        acc = el.quantity * el.price;
      })
    }))};
 
  return (
    <div>
      <h1>User Orders</h1>
      {userOrders.map((i) =>
      <>        

          <h2>ID: {i.id}</h2>
          <h2>Status: {i.status}</h2>
          <h2>{getTotal(userOrders)}</h2>
          {i.orderLines.map((e) =>
          
            <Order
              img={e.product.images[0]}
              name={e.product.name}
              price={e.product.price}
              quantity={e.quantity}
              totalPrice={e.price} />
          )}
        </>
      )}

    </div>
  );
};


export default OrderContainer;