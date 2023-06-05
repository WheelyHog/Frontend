const defaultState = []



const checkProduct = (state, payload) => {
  const productInState = state.find(el => el.id === payload.id)
  if (productInState) {
    productInState.count++
    return [...state]
  } else {
    return [...state, { ...payload, count: 1 }]
  }
}

export const cartReducer = (state = defaultState, action) => {
  if (action.type === 'ADD_TO_CART') {
    return checkProduct(state, action.payload)
  } else if (action.type === 'INCREMENT') {
    state.find(el => el.id === action.payload).count++
    return [...state]
  } else if (action.type === 'DECREMENT') {
    const target = state.find(el => el.id === action.payload)
    if (target.count === 1) {
      state = state.filter(el => el.id !== action.payload)
    } else {
      target.count--
    }
    return [...state]
  }
  return state
}

export const add_to_cart = payload => ({ type: 'ADD_TO_CART', payload })
export const increment = payload => ({ type: 'INCREMENT', payload })
export const decrement = payload => ({ type: 'DECREMENT', payload })
export const clear_cart = () => ({ type: 'CLEAR_CART' })