import {
  CREATE_USER,
  UPDATE_USER,
  GET_ALL_USERS,
  DELETE_USER,
  POST_USER_CART,
  GET_USER_CART,
  DELETE_USER_CART,
  UPDATE_USER_CART,
  LOGIN_USER,
  LOGOUT_USER,
  AUTO_LOGIN,
  USER_CHANGE_PASSWORD,
  SUCCESS_REQUEST,
  START_REQUEST,
  SET_ERROR,
  PROMOTE_USER,
  DEGRADE_USER,
  BAN_USER
} from "../actions/user";

const initialState = {
  user: {},
  users: [],
  userCart: [],
  isUser: false,
  loading: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: [...state.user, action.user]
      };
    case UPDATE_USER:
      return {
        ...state,
        user: state.user.map(user => {
          if (user.id === action.user.id)
            return action.user;
          return user;
        })
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.user
      };
    case PROMOTE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.user.id)
            return action.user;
          return user;
        })
      };
    case DEGRADE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.user.id)
            return action.user;
          return user;
        })
      };
    case BAN_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.user.id)
            return action.user;
          return user;
        })
      };
    case DELETE_USER:
      return {
        ...state,
        user: state.user.filter(user =>
          action.userDeleted.id !== user.id
        )
      };
    case POST_USER_CART:
      return {
        ...state,
        userCart: action.userCart
      };
    case GET_USER_CART:
      return {
        ...state,
        user: state.user.map(user => {
          if (user.id === action.id && user.cart)
            return user.cart;
          return user;
        })
      };
    case DELETE_USER_CART:
      return {
        ...state,
        user: state.user.map(user => {
          if (user.id === action.userId && user.cart) {
            user.cart = [];
          }
          return user;
        })
      };
    case UPDATE_USER_CART:
      return {
        ...state,
        user: state.user.map(user => {
          if (user.id === action.id && user.cart) {
            user.cart = action.userCart;
          }
          return user;
        })
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.user,
        isUser: true
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: action.user,
        isUser: false
      };
    case AUTO_LOGIN:
      return {
        ...state,
        user: action.user,
        isUser: true
      };
    case USER_CHANGE_PASSWORD:
      return {
        ...state,
        user: action.user
      };
    case SUCCESS_REQUEST:
      return {
        ...state,
        loading: false
      };
    case START_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default userReducer;