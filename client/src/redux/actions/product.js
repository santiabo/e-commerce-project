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

export const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product
  };
};

export const deleteProduct = ({ productDeleted }) => {
  return {
    type: DELETE_PRODUCT,
    productDeleted
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    try {

      const res = await axios.get(`http://localhost:5000/products/${id}`);

      dispatch(getDetailProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProducts = (search) => {
  return async (dispatch) => {
    try {

      const res = await axios.get(`http://localhost:5000/products/${search ? "?search=" + search : ""}`);

      dispatch(getAllProducts(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addProduct = (newProduct) => {
  return async (dispatch) => {
    try {

      const res = await axios.post(`http://localhost:5000/products`, { ...newProduct });

      dispatch(createProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const editProduct = (id, updatedProduct) => {
  return async (dispatch) => {
    try {

      const res = await axios.put(`http://localhost:5000/products/${id}`, { ...updatedProduct });

      dispatch(updateProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeProduct = (id) => {
  return async (dispatch) => {
    try {

      const res = await axios.delete(`http://localhost:5000/products/${id}`);

      dispatch(deleteProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};