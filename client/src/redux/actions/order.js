/* import axios from "axios";

// Types
export const POST_CART_ITEM= "POST_CART_ITEM";
export const GET_ALL_CART_ITEMS = "GET_ALL_CART_ITEMS";
export const DELETE_ITEMS_FROM_CART = "DELETE_ITEMS_FROM_CART";
export const UPDATE_CART_ITEM_COUNT = "UPDATE_CART_ITEM_COUNT";


const postCartItem = (item) => {
  return {
    type: POST_CART_ITEM,
    item
  };
};

const getAllCartItems = (items) => {
  return {
    type: GET_ALL_CART_ITEMS,
    items
  };
};

const deleteItemsFromCart = (items) => {
  return {
    type: DELETE_ITEMS_FROM_CART,
    items
  };
};

const updateCartItemCount = (item) => {
  return {
    type: UPDATE_CART_ITEM_COUNT,
    item
  };
};



export const postNewCartItem = (newCartItem) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:5000/users/${idUser}/cart`, { ...newCartItem });
      dispatch(postCartItem(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

/* export const getCartItems = (idUser) => {
  return async (dispatch) => {
    try {

      const res = await axios.get(`http://localhost:5000/users/${idUser}/cart`);

      dispatch(getAllCartItems(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeItemsFromCart = (idUser) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:5000/users/${idUser}/cart`);
      dispatch(deleteItemsFromCart(res.data));
    } catch (err) {
      console.log(err);
    }
  };
}; 

export const editCartItem = (idUser, updatedItem) => {
  return async (dispatch) => {
    try {

      const res = await axios.put(`http://localhost:5000/users/${idUser}/cart`, { ...updatedItem });

      dispatch(updateCartItemCount(res.data));
    } catch (err) {
      console.log(err);
    }
  };
}; */


