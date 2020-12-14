import {
  GET_DETAIL_PRODUCT,
  GET_ALL_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SET_CATEGORY_TO_PRODUCT,
  UNSET_CATEGORY_TO_PRODUCT,
  GET_PRODUCTS_FILTERED_BY_CATEGORY
} from "../actions/product";

const initialState = {
  products: [],
  filteredProducts: [],
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
    case SET_CATEGORY_TO_PRODUCT:
      return {
        ...state,
        products: state.products.map(p => {
          if (p.id === action.product.id)
            return action.product;
          return p;
        })
      };
    case UNSET_CATEGORY_TO_PRODUCT:
      return {
        ...state,
        products: state.products.map(p => {
          if (p.id === action.product.id)
            return action.product;
          return p;
        })
      };
    case GET_PRODUCTS_FILTERED_BY_CATEGORY:
      return {
        ...state,
        filteredProducts: action.products
      };
    default:
      return state;
  };
};

export default productReducer;