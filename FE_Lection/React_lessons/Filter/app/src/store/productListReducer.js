const defaultState = []

const ADD_PRODUCT_LIST = 'ADD+PRODUCT_LIST'
const FILTER_PRODUCTS_BY_SALE = 'FILTER_PRODUCTS_BY_SALE'


export const productListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_LIST:
      return action.payload.map(elem => ({ ...elem, show: true }))
    case FILTER_PRODUCTS_BY_SALE:
      if (action.payload) {
        return state.map(elem => {
          if (!(elem.rating.rate >= 4)) {
            elem.show = false
          }
          return elem
        })
      } else {
        return state.map(elem => ({ ...elem, show: true }))
      }

    default:
      return state
  }
}

export const addProductListAction = (payload) => ({ type: ADD_PRODUCT_LIST, payload })
export const filterProductsBySaleAction = (payload) => ({ type: FILTER_PRODUCTS_BY_SALE, payload })