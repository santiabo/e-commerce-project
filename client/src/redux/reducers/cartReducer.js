import {
  GET_CART_ITEMS_FROM_LOCAL_STORAGE,
  SET_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART
} from "../actions/cart";

const initialState = {
  cart: [],
  cartAmount: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS_FROM_LOCAL_STORAGE:
      return {
        ...state,
        cart: action.cart,
        cartAmount: action.cart.length
      };

    case SET_ITEM_TO_CART:
      const [exist] = state.cart.filter(item => item.id === action.product.id);
      const newState = {
        ...state,
        cart: exist ? state.cart.map(item => {
          if (item.id === action.product.id) {
            return {
              ...item,
              quantity: item.quantity + action.quantity
            };
          }
          return item;
        }) : (
            [...state.cart, { ...action.product, quantity: action.quantity }]
          ),
        cartAmount: exist ? state.cartAmount : state.cartAmount + 1
      };
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;

    case REMOVE_ITEM_FROM_CART:
      const newStateRemove = {
        cart: state.cart.filter(item => item.id !== action.id),
        cartAmount: state.cartAmount - 1
      };
      localStorage.setItem("cart", JSON.stringify(newStateRemove.cart));
      return newStateRemove;

    case CLEAR_CART:
      localStorage.removeItem("cart");
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;