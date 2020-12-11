import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";

// Scaffolding
// store = {
//   product: {
//     productDetail: {},
//     products: []
//   },
//   category: {
//     ...
//   }
// }

const rootReducer = combineReducers({
  product: productReducer
});

export default rootReducer;
