import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
})

export const store = createStore(rootReducer)