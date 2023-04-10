export const basketReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_BASKET') {
        const target = state.find(({id}) => id === action.payload);
        if (target === undefined) {
            return [...state, {id: action.payload, count: 1}]
        } else {
            target.count++;
            return [...state]
        }
    } else if (action.type === 'INCR_COUNT') {
        const target = state.find(({id}) => id === action.payload);
        target.count++
        return [...state]
    } else if (action.type === 'DECR_COUNT') {
        const target = state.find(({id}) => id === action.payload);
        target.count--;
        if(target.count === 0){
            return  state.filter(elem => elem!== target)
        }
        return [...state]
    }
    return state

}