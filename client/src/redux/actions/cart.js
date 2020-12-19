// Types
export const GET_CART_ITEMS_FROM_LOCAL_STORAGE = "GET_CART_ITEMS_FROM_LOCAL_STORAGE";
export const SET_ITEM_TO_CART = "SET_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM"

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