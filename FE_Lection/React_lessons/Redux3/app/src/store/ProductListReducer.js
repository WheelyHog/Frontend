const defaultState = {
  titlePage: {},
  productList: []
}

const FETCH_PRODUCT_LIST_BY_CATEGORY = 'FETCH_PRODUCT_LIST_BY_CATEGORY'
const PRODUCT_LIST_BY_SALE = 'PRODUCT_LIST_BY_SALE'

export const ProductListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST_BY_CATEGORY:
      if (action.payload.category.title) {
        return { titlePage: action.payload.category, productList: action.payload.data }
      } else {
        return { titlePage: { title: 'All products' }, productList: action.payload.data }
      }
    case PRODUCT_LIST_BY_SALE:
      return { titlePage: { title: 'Products with sale' }, productList: state.productList.filter(elem => elem.discont_price) }
    default:
      return state

  }
}

export const productsListByCatAction = (payload) => ({ type: FETCH_PRODUCT_LIST_BY_CATEGORY, payload })
export const productListBySale = () => ({ type: PRODUCT_LIST_BY_SALE })