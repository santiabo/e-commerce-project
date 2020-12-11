import axios from "axios";

// Types
export const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getDetailProduct = (product) => {
  return {
    type: GET_DETAIL_PRODUCT,
    product
  };
};

export const getAllProducts = (products) => {
  return {
    type: GET_ALL_PRODUCTS,
    products
  };
};

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product
  };
};

export const updateProduct = (id, updatedProduct) => {
  return {
    type: UPDATE_PRODUCT,
    id,
    updatedProduct
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id
  };
};

export const getProduct = async (id) => {
  return (dispatch) => {
    try {

      const product = await axios.get(`http://localhost:5000/products/${id}`);

      dispatch(getDetailProduct(product));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProducts = async (search) => {
  return (dispatch) => {
    try {

      const products = await axios.get(`http://localhost:5000/products/${search ? "?search=" + search : ""}`);

      dispatch(getAllProducts(products));
    } catch (err) {
      console.log(err);
    }
  };
};