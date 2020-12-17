import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
// import orderReducer from "./reducers/orderReducer";
import cartReducer from "./reducers/cartReducer";

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
  category: categoryReducer,
  cart: cartReducer
});

export default rootReducer;
