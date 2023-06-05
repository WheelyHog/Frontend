import { root_url } from ".."
import { productListBySale, productsListByCatAction } from "../store/ProductListReducer"

export function fetchProductsListByCat(id) {
  return function (dispatch) {
    fetch(`${root_url}/categories/${id}`)
      .then(res => res.json())
      .then(data => dispatch(productsListByCatAction(data)))
  }
}


export function fetchAllProductsList(type) {
  return function (dispatch) {
    fetch(`${root_url}/products/all`)
      .then(res => res.json())
      .then(data => {
        dispatch(productsListByCatAction({ data, category: {} }))
        if (type === 'sale') {
          dispatch(productListBySale())
        }
      })
  }
}