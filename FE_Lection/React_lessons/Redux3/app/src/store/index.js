import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ProductListReducer } from './ProductListReducer';

const rootReducer = combineReducers({
  productList: ProductListReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))