import {
  GET_PRODUCT,
  GET_PRODUCTS,
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
    case GET_PRODUCT:
      return {
        ...state,
        productDetail: action.id
      };
    default:
      return state;
  }
};

export default productReducer;