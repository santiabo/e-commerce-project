import {
  GET_DETAIL_PRODUCT,
  GET_ALL_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from "../actions/product";

const initialState = {
  products: [],
  productDetail: {}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        productDetail: action.product
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product]
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(p => {
          if (p.id === action.product.id)
            return action.product;
          return p;
        })
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.productDeleted)
      };
    default:
      return state;
  }
};

export default productReducer;