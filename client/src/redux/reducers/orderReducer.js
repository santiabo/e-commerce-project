export const initialState = {
  allOrders : [],
  searchOrder : [],
  orderDetail: [],
  userOrders: [],
  orderReadOnly: null,
  orderUpdate: null
};

const USER_ORDERS = 'USER_ORDERS'
const RESET_STATE = 'RESET_STATE';
const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
const REMOVE_ORDER = 'REMOVE_ORDER';
const CREATED_ORDER = 'CREATED_ORDER';
const DELIVERED_ORDER = 'DELIVERED_ORDER';
const PROCESSING_ORDER = 'PROCESSING_ORDER';
const CANCELLED_ORDER = 'CANCELLED_ORDER';
const SEND_ORDER = 'SEND_ORDER';
const GET_ORDER_DETAIL = 'GET_ORDER_DETAIL';
const HANDLE_VIEW_ORDER = 'HANDLE_VIEW_ORDER';
const COMPLETED_ORDER = 'COMPLETED_ORDER';
const DISABLED_CRUD = 'DISABLED_CRUD';
const ADD_PRODUCT_TO_SHOPPINGCART = 'ADD_PRODUCT_TO_SHOPPINGCART';
const SET_SHOPPINGCART = 'SET_SHOPPINGCART'

export default function orders_reducer(state = initialState, action) {

  switch(action.type) {
    case RESET_STATE:
      return {
        ...state,
        orderUpdate: null
      }
      case USER_ORDERS:
        return {
          ...state,
          userOrders: action.payload
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
    case CREATED_ORDER: 
      return {
        ...state,
        orderUpdate: true
      }
    case DELIVERED_ORDER: 
      return {
        ...state,
        orderUpdate: true
      }
    case PROCESSING_ORDER: 
      return {
        ...state,
        orderUpdate: true
      }
    case CANCELLED_ORDER:
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
      console.log("ORDER DETAIL >>> ", action.payload)
      return {        
        ...state,
        orderDetail: action.payload
      }
    case HANDLE_VIEW_ORDER: 
      return {
        ...state,
        orderReadOnly: true
      }
    case COMPLETED_ORDER: 
      return {
        ...state,
        orderUpdate: true
      }
    case DISABLED_CRUD:
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
        break;
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