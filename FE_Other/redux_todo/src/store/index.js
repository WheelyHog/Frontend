import {combineReducers, createStore} from "redux";
import {productReducer} from "./reducer/ProductsReducer";
import {basketReducer} from "./reducer/BasketReducer";

const rootReducer = combineReducers({
    products: productReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer)