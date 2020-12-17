import { ProductsColumn } from "../../components/Catalogue/styles";
import {
  POST_CART_ITEM,
  GET_ALL_CART_ITEMS,
  DELETE_ITEMS_FROM_CART,
  UPDATE_CART_ITEM_COUNT,
  } from "../actions/order";

const initialState = {
  cart: [],
  total:0,
  amount:0
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CART_ITEMS:
      return {
        ...state,
        cart: action.items
      };
    case UPDATE_CART_ITEM_COUNT:
      return {
        ...state,
        count: state.cart.map(i => {
          if (i.id === action.cart.id)
            return action.cart;
          return i;
        })
      };
    case DELETE_ITEMS_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(p => p.id !== action.itemtDeleted)
      };
    case POST_CART_ITEM:
      return {
        ...state,
        cart: state.items.map(i => {
          if (i.id === action.items.id)
            return action.items;
          return i;
        })
      };
    default:
      return state;
  };
};

export default productReducer;