import {
  CREATE_REVIEW,
  GET_ALL_REVIEWS
} from "../actions/review";

const initialState = {
  reviews: [],
  average: null,
  recomendedPercentage: null
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      let average = action.reviews.reduce((prev, curr) => prev + curr.stars, 0) / action.reviews.length;
      let recomendedPercentage = action.reviews.reduce((prev, curr) => curr.stars >= 4 ? prev + 1 : prev, 0) / action.reviews.length * 100;
      return {
        ...state,
        reviews: action.reviews,
        average,
        recomendedPercentage
      };
    case CREATE_REVIEW:
      average = action.reviews.reduce((prev, curr) => prev + curr.stars, 0) / action.reviews.length;
      recomendedPercentage = action.reviews.reduce((prev, curr) => curr.stars >= 4 ? prev + 1 : prev, 0) / action.reviews.length * 100;
      return {
        ...state,
        reviews: state.reviews.concat(action.review),
        average,
        recomendedPercentage
      };
    default:
      return state;
  };
};

export default reviewReducer;