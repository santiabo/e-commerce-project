
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserOrders } from '../redux/actions/order';


const OrderContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user)
  const isUser = useSelector(state => state.user.isUser)
  console.log("USER ID >>>>>>> ", user.user.id)
  useEffect(() => {
    if (!isUser) {
      history.push('/');
    }
  }, [history, isUser])

  useEffect(() => {
    dispatch(getUserOrders(user.user.id))
  }, [dispatch, user.user.id])

  const userOrders = useSelector(state => state.order.userOrders);

  const getTotal = (obj) => {
    let suma = 0;
    console.log(obj[0])
    for (let j = 0; j < obj.orderLines.length; j++) {
      suma = suma + (obj.orderLines[j].price * obj.orderLines[j].quantity)
    }

    return suma;
  };

  return (
    <div className="App">
      <h2>Orders</h2>
      <section>
        <table width="100%" border="1" bordercolor="#000000" cellspacing="10" cellpadding="10" >
          <thead>
            <tr valign="middle" align="center">
              <th>id </th>
              <th>Creation date</th>
              <th>Last update</th>
              <th>Total</th>
              <th>Status</th>
              <th>  </th>
            </tr>
          </thead>
          <tbody>
            {userOrders !== undefined &&
              userOrders.map((i) =>
                <tr valign="middle" align="center">
                  <td>{i.id}</td>
                  <td>{i.createdAt.slice(0, 10)}</td>
                  <td>{i.updatedAt.slice(0, 10)}</td>
                  <td>$ {getTotal(i)}</td>
                  <td>{i.status}</td>
                  <img src={i.orderLines[0].product.images[0]} width="75" height="75" alt=""></img>
                </tr>
              )}
          </tbody>
        </table>
      </section>
    </div>
  )
};

export default OrderContainer;