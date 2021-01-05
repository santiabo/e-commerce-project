import {
  CREATE_USER,
  UPDATE_USER,
  GET_ALL_USERS,
  DELETE_USER,
  POST_USER_CART,
  GET_USER_CART,
  DELETE_USER_CART,
  UPDATE_USER_CART,
  LOGIN_USER
} from "../actions/user";

const initialState = {
  user: [],
  isUser: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.user]
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.user.id)
            return action.user;
          return user;
        })
      }
    case GET_ALL_USERS:
      if (action.user.isAdmin)
        return {
          ...state,
          users: action.user
        }
    case DELETE_USER:
        return {
          ...state,
          users: state.users.filter(user => 
            action.userDeleted.id !== user.id
          )
        }
    case POST_USER_CART:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId)
            return [...user, action.cart]
          return user;
        })
      };
    case GET_USER_CART:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id && user.cart)
            return user.cart
          return user;
        })
      }
    case DELETE_USER_CART:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId && user.cart) {
            user.cart = [];
          }
        })
      }
    case UPDATE_USER_CART:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id && user.cart) {
            user.cart = action.userCart
          }
        })
      }
      case LOGIN_USER:
        console.log('action',action.user)
        return{
          ...state,
          user: action.user,
          isUser: true
        }
    default:
      return state;
  }
};

export default userReducer;