const INCR_BY_PAYLOAD = 'INCR_BY_PAYLOAD'
const DECR_BY_PAYLOAD = 'DECR_BY_PAYLOAD'

const defaultState = {
  count: 0
}

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCR_BY_PAYLOAD:
      return { ...state, count: state.count + action.payload }
    case DECR_BY_PAYLOAD:
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}

export const incrByPayloadAction = (payload) => ({ type: INCR_BY_PAYLOAD, payload })
export const decrByPayloadAction = (payload) => ({ type: DECR_BY_PAYLOAD, payload })

