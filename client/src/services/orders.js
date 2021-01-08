import axios from 'axios';

// AGREGA PRODUCTO A LA ORDEN DADO EL ID DEL PRODUCTO Y DE LA ORDEN
export async function addProductToOrder(
  idProduct,
  amount,
  orderId,
  idUser
) {
  return axios
    .post(`http://localhost:5000/orders/${orderId}/product/${idProduct}`, {
      amount,
      idUser,
    })
    .then(res => {
      return res.data;
    })
    .catch(() => {
      return undefined;
    });
}

// CREA UNA ORDEN
export async function createOrder() {
  return axios
    .post(`http://localhost:5000/orders`)
    .then(res => {
      return res.data;
    })
    .catch(() => {
      return undefined;
    })
}

// CREA UNA ORDEN Y LE AGREGA TODOS LOS PRODUCTOS
export async function createOrderProduct(products, idUser) {
  return axios
    .post(`http://localhost:5000/orders/products`, { products, idUser })
    .then(res => {
      return res.data
    })
    .catch(() => {
      return undefined;
    })
}

// OBTIENE TODAS LAS ORDENES
export async function getAllOrders() {
  return axios
    .get(`http://localhost:5000/orders`)
    .then(res => {
      return res.data
    })
    .catch(() => {
      return undefined;
    })
}

// OBTIENE UNA ORDEN SEGUN SU ID
export async function getOrderById(id) {
  return axios
  .get(`http://localhost:5000/orders/${id}`)
  .then(res => {
    console.log("continuacion de entre",res.data)
    return res.data;
  })
  .catch(() => {
    return undefined
  })
}

// OBTIENE TODAS LAS ORDENES DEL USUARIO DADO SU ID
export async function getOrderByUserId(idUser) {
  return axios
  .get(`http://localhost:5000/users/${idUser}/orders`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// PONE UNA ORDEN COMO VACIA
export async function removeEmptyOrder(id) {
  return axios
  .delete(`http://localhost:5000/order/${id}/empty`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// ELIMINA UNA ORDEN 
export async function removeOrder(id) {
  return axios
  .delete(`http://localhost:5000/orders/${id}`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// ELIMINA UN PRODUCTO DE UNA ORDEN
export async function removeProduct(idOrder, idProduct) {
  return axios
  .delete(`http://localhost/5000/orders/${idOrder}/product/${idProduct}`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// PONE UNA ORDEN COMO FINALIZADA
export async function setCompleteOrder(idOrder) {
  return axios
  .put(`http://localhost:5000/orders/${idOrder}/finalized`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// PONE UNA ORDEN COMO CONFIRMED
export async function setConfirmOrder(idOrder) {
  return axios
  .put(`http://localhost:5000/orders/${idOrder}/confirmed`, )
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// PONE UNA ORDEN COMO DELIVERED
export async function setDeliveredOrder(idOrder) {
  return axios
  .put(`http://localhost:5000/orders/${idOrder}/delivered`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// PONE UNA ORDEN COMO VACIA
export async function setEmptyOrder(idOrder) {
  return axios
  .put(`http://localhost:5000/orders/${idOrder}/empty`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// PONE UNA ORDEN COMO FINALIZED
export async function setFinalizedOrder(idOrder) {
  return axios
  .put(`http://localhost:5000/orders/${idOrder}/finalized`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// AGREGA UN PRODUCTO A UNA ORDEN
export async function setOrderToUser(idOrder, idUser) {
  return axios
  .post(`http://localhost:5000/orders/${idOrder}/user/${idUser}`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

//PONE UNA ORDEN COMO PREPARING
export async function setPreparedOrder(idOrder) {
  return axios
  .put(`http://localhost:5000/orders/${idOrder}/preparing`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

//PONE COMO REJECTED UNA ORDEN
export async function setRejectedOrder(idOrder) {
  return axios
  .put(`http://localhost:5000/orders/${idOrder}/rejected`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// PONE COMO SET UNA ORDEN
export async function setSendOrder(idOrder) {
  return axios
  .put(`http://localhost:5000/orders/${idOrder}/send`)
  .then(res => {
    return res.data;
  })
  .catch(() => {
    return undefined;
  })
}

// ACTUALIZA EL STATUS
export async function setUpdateOrder (id, status) {
  return axios
  .put(`http://localhost:5000/orders/${id}`, { status })
  .then(res => {
    return res.data
  })
  .catch(() => {
    return undefined;
  })
}


// module.exports = {
//   addProductToOrder,
//   createOrder,
//   createOrderProduct,
//   getAllOrders,
//   getOrderById,
//   getOrderByUserId,
//   removeEmptyOrder,
//   removeOrder,
//   removeProduct,
//   setCompleteOrder,
//   setConfirmOrder,
//   setDeliveredOrder,
//   setEmptyOrder,
//   setFinalized,
//   setOrderToUser,
//   setPreparedOrder,
//   setRejectedOrder,
//   setSendOrder,
//   setUpdateOrder
// }