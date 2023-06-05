import { addProductListAction } from "../store/productListReducer"

export function fetchProductList() {
  return function (dispatch) {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch(addProductListAction(data)))
  }
}

