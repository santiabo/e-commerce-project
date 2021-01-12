import { authAxios } from './user';

// Types

export const GET_CART_ITEMS_FROM_LOCAL_STORAGE = "GET_CART_ITEMS_FROM_LOCAL_STORAGE";
export const SET_ITEM_TO_CART = "SET_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";
export const SET_USER_CART = "SET_USER_CART";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";

export const getCartItemsFromLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return {
    type: GET_CART_ITEMS_FROM_LOCAL_STORAGE,
    cart
  };
};

export const setItemToCart = (product, quantity) => {
  return {
    type: SET_ITEM_TO_CART,
    product,
    quantity
  };
};

export const addItemToCart = (orderline) => {
  return {
    type: ADD_ITEM_TO_CART,
    orderline
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    id
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};

export const incrementItem = (id) => {
  return {
    type: INCREMENT_ITEM,
    id
  };
};

export const decrementItem = (id) => {
  return {
    type: DECREMENT_ITEM,
    id
  };
};

const setUserCart = (cart) => {
  return {
    type: SET_USER_CART,
    cart
  };
};

export const getUserCart = (userId) => {
  return async (dispatch) => {
    try {

      const res = await authAxios.get(`/users/${userId}/cart`);

      dispatch(setUserCart(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const postItemToCart = (orderline) => {
  return async (dispatch) => {
    try {

      const res = await authAxios.post(`/orderline`, orderline);

      dispatch(addItemToCart(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};