const ADD_TO_BASKET = 'ADD_TO_BASKET';
const INCR_COUNT = 'INCR_COUNT';
const DECR_COUNT = 'DECR_COUNT';
const REMOVE_ITEM = 'REMOVE_ITEM'

export const addToBasketAction = (payload) => ({type: ADD_TO_BASKET, payload})
export const incrCountAction = (payload) => ({type: INCR_COUNT, payload})
export const decrCountAction = (payload) => ({type: DECR_COUNT, payload})
export const removeItemAction = (payload) => ({type: REMOVE_ITEM, payload})

export const basketReducer = (state = [], action) => {
    if (action.type === ADD_TO_BASKET) {
        const target = state.find(({id}) => id === action.payload);
        if (target === undefined) {
            return [...state, {id: action.payload, count: 1}]
        } else {
            target.count++;
            return [...state]
        }
    } else if (action.type === INCR_COUNT) {
        const target = state.find(({id}) => id === action.payload);
        target.count++
        return [...state]
    } else if (action.type === DECR_COUNT) {
        const target = state.find(({id}) => id === action.payload);
        target.count--;
        if(target.count === 0){
            return  state.filter(elem => elem!== target)
        }
        return [...state]
    } else if(action.type === REMOVE_ITEM){
        return state.filter(elem => elem.id!==action.payload)
    }
    return state

}