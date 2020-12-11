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
    default:
      return state;
  }
};

export default productReducer;