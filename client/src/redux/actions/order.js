import { getAllOrders, removeOrder, setConfirmOrder, setFinalizedOrder, setCompleteOrder, setDeliveredOrder, setPreparedOrder, setRejectedOrder, setSendOrder, getOrderById } from '../../services/orders';
import axios from 'axios';

const ADD_PRODUCT_TO_SHOPPINGCART = 'ADD_PRODUCT_TO_SHOPPINGCART';
const SET_SHOPPINGCART = 'SET_SHOPPINGCART';
const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
const RESET_STATE = 'RESET_STATE';
const REMOVE_ORDER = 'REMOVE_ORDER';
const CONFIRM_ORDER = 'CONFIRM_ORDER';
const DELIVERED_ORDER = 'DELIVERED_ORDER';
const PREPARE_ORDER = 'PREPARE_ORDER';
const REJECT_ORDER = 'REJECT_ORDER';
const FINALIZED_ORDER = 'FINALIZED_ORDER';
const SEND_ORDER = 'SEND_ORDER';
const HANDLE_VIEW_ORDER = 'HANDLE_VIEW_ORDER';
const GET_ORDER_DETAIL = 'GET_ORDER_DETAIL';
const DISABLED_CRUD = 'DISABLED_CRUD';

export const addProductToShoppingCart =(id, name, price, amount) => {
  return {
    type: ADD_PRODUCT_TO_SHOPPINGCART,
    payload: {
      id,
      name,
      price,
      amount,
    },
  };
}

export const setShoppingCart = (shoppingCart) => {
  return {
    type: SET_SHOPPINGCART,
    payload: shoppingCart,
  };
}

export const getOrders = (id) => {
  return async (dispatch) => {
    try {

      const res = await axios.get(`http://localhost:5000/orders/${id}`);

      dispatch(getAllOrders(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllOrdersAction = () => {
  return (dispatch) => {
    return getAllOrders()
    .then((data) => {
      dispatch({
        type: GET_ALL_ORDERS,
        payload: data
      })
    })
  }
}

export const removeOrderAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: RESET_STATE,
    })
    return removeOrder(id)
    .then((data) => {
      dispatch({
        type: REMOVE_ORDER,
        payload: data
      })
    })
  }
}

export const setCompletedOrderAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: RESET_STATE
    })
    return setCompleteOrder(id)
    .then((data) => {
      dispatch({
        type: REMOVE_ORDER,
        payload: data
      })
    })
  }
}

export const setConfirmOrderAction = (id, address) => {
  return (dispatch) => {
    dispatch({
      type: RESET_STATE
    })
    return setConfirmOrder(id, address)
      .then((data) => {
        dispatch({
          type: CONFIRM_ORDER,
          payload: data
        })
      })
  }
}

export const setDeliveredOrderAction = (id) => {
  return (dispatch) => {
    dispatch ({
      type: RESET_STATE
    })
    return setDeliveredOrder(id)
    .then(data => {
      dispatch({
        type: DELIVERED_ORDER,
        payload: data
      })
    })
  }
}

export const setPrepareOrderAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: RESET_STATE
    })
    return setPreparedOrder(id)
    .then(data => {
      dispatch({
        type: PREPARE_ORDER,
        payload: data
      })
    })
  }
}

export const setRejectedOrderAction = (id) => {
  return dispatch => {
    dispatch({
      type: RESET_STATE
    })
    return setRejectedOrder(id)
    .then(data => {
      dispatch({
        type: REJECT_ORDER,
        payload: data
      })
    })
  }
}

export const setFinalizedOrderAction = (id) => {
  return dispatch => {
    dispatch({
      type: RESET_STATE
    })
    return setFinalizedOrder(id)
    .then(data => {
      dispatch({
        type: FINALIZED_ORDER,
        payload: data
      })
    })
  }
}

export const setSendOrderAction = (id) => {
  return dispatch => {
    dispatch({
      type: RESET_STATE
    })
    return setSendOrder(id)
    .then(data => {
      dispatch({
        type: SEND_ORDER,
        payload: data
      })
    })
  }
}

export const handleViewOrder = (id) => {
  return dispatch => {
    dispatch(getOrderDetail(id))
    .then(() => {
      dispatch({
        type: HANDLE_VIEW_ORDER
      })
    })
  }
}

export const getOrderDetail = (id) => {
  return dispatch => {
    dispatch({
      type: GET_ORDER_DETAIL,
      payload: null
    })
    return getOrderById(id)
    .then(data => {
      dispatch({
        type: GET_ORDER_DETAIL,
        payload: data
      })
    })
  }
}

export const disabledCrud = () => {
  return {
    type: DISABLED_CRUD
  }
}

// module.exports = {
//   addProductToShoppingCart,
//   setShoppingCart,
//   getAllOrdersAction,
//   removeOrderAction,
//   setCompletedOrderAction,
//   setConfirmOrderAction,
//   setDeliveredOrderAction,
//   setPrepareOrderAction,
//   setRejectedOrderAction,
//   setFinalizedOrderAction,
//   setSendOrderAction,
//   handleViewOrder,
//   getOrderDetail,
//   disabledCrud
// }