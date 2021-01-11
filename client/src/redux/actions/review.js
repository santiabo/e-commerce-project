import axios from "axios";

// Types
export const CREATE_REVIEW = "CREATE_REVIEW";

const createProduct = (review) => {
  return {
    type: CREATE_REVIEW,
    review
  };
};

export const addReview = (review, productId) => {
  return async (dispatch) => {
    try {

      const res = await axios.post(`http://localhost:5000/products/${productId}/review`, { ...newProduct });

      dispatch(createProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};