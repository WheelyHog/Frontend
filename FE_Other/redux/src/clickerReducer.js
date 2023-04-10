export const ADD_VALUE = 'ADD_VALUE'

export const addValueAction = (payload) => {
    return {
        type: ADD_VALUE,
        payload: +payload
    }
}

export const clickerReducer = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1
    } else if (action.type === 'DECREMENT') {
        return state - 1
    } else if(action.type === 'CLEAR'){
        return 0
    } else if(action.type === ADD_VALUE) {
        return state + action.payload
    }else if(action.type === 'MINUS_VALUE') {
        return state - action.payload
    }
    else {
        return state
    }
}