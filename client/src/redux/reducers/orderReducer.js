export const initialState = {
  allOrders : [],
  searchOrder : [],
  orderDetail: undefined,
  orderReadOnly: null,
  orderUpdate: null
};

const RESET_STATE = 'RESET_STATE';
const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
const REMOVE_ORDER = 'REMOVE_ORDER';
const CONFIRM_ORDER = 'CONFIRM_ORDER';
const DELIVERED_ORDER = 'DELIVERED_ORDER';
const PREPARE_ORDER = 'PREPARE_ORDER';
const REJECT_ORDER = 'REJECT_ORDER';
const SEND_ORDER = 'SEND_ORDER';
const GET_ORDER_DETAIL = 'GET_ORDER_DETAIL';
const HANDLE_VIEW_ORDER = 'HANDLE_VIEW_ORDER';
const FINALIZED_ORDER = 'FINALIZED_ORDER';
const DISABLED_ORDER = 'DISABLED_CRUD';
const ADD_PRODUCT_TO_SHOPPINGCART = 'ADD_PRODUCT_TO_SHOPPINGCART';
const SET_SHOPPINGCART = 'SET_SHOPPINGCART'

export default function orders_reducer(state = initialState, action) {

  switch(action.type) {
    case RESET_STATE:
      return {
        ...state,
        orderUpdate: null
      }
    case GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload
      }
    case REMOVE_ORDER: 
      return {
        ...state,
        orderRemove: action.payload
      }
    case CONFIRM_ORDER: 
      return {
        ...state,
        orderUpdate: true
      }
    case DELIVERED_ORDER: 
      return {
        ...state,
        orderUpdate: true
      }
    case PREPARE_ORDER: 
      return {
        ...state,
        orderUpdate: true
      }
    case REJECT_ORDER:
      return {
        ...state,
        orderUpdate: true
      }
    case SEND_ORDER: 
      return {
        ...state,
        orderUpdate: true
      }
    case GET_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: action.payload
      }
    case HANDLE_VIEW_ORDER: 
      return {
        ...state,
        orderReadOnly: true
      }
    case FINALIZED_ORDER: 
      return {
        ...state,
        orderUpdate: true
      }
    case DISABLED_ORDER:
      return {
        ...state,
        orderRemove: null,
        orderDetail: null,
        orderReadOnly: null,
        orderUpdate: null
      }
      case ADD_PRODUCT_TO_SHOPPINGCART:
        let newState = {
          ...state
        }
        if(state.shoppingCart) {
          newState.shoppingCart.push(action.payload);
        } else {
          newState.shoppingCart = {
            products: [
              action.payload
            ]
          }
          return newState
        }
      case SET_SHOPPINGCART:
        return {
          ...state,
          shoppingCart: action.payload
        }
      default: 
      return {
        ...state
      }
  }
}