import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";

// Scaffolding
// store = {
//   product: {
//     products: [],
//     filteredProducts: [],
//     productDetail: {},
//   },
//   category: {
//     categories: []
//   }
// }

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer
});

export default rootReducer;
