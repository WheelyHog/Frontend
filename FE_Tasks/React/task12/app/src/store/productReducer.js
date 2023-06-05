
const defaultState = []

export const productReducer = (state = defaultState, action) => {
  if (action.type === 'ADD_PRODUCT') {
    return [...state, {
      id: Date.now(),
      ...action.payload
    }]
  } else {
    return state
  }
}

export const add_product = payload => ({ type: 'ADD_PRODUCT', payload })