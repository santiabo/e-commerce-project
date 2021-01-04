import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
// import orderReducer from "./reducers/orderReducer";
import cartReducer from "./reducers/cartReducer";
import orders_reducer from "./reducers/orderReducer";

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
  cart: cartReducer,
  order: orders_reducer
});

export default rootReducer;
