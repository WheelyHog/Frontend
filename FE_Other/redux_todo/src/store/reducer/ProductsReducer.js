const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE = 'DELETE';


const products = [
    {
        id: 1,
        title: 'title1',
        price: 1000,
        discount: 7
    },
    {
        id: 12,
        title: 'title2',
        price: 2000,
        discount: 17
    },
    {
        id: 3,
        title: 'title3',
        price: 3000,
        discount: 2
    },
    {
        id: 4,
        title: 'title4',
        price: 700,
        discount: 27
    }]

export const addProductAction = (title, price, discount) => {
return {
    type: ADD_PRODUCT,
    payload: {id: Date.now(), title, price, discount}
}
}

export const deleteProductAction = (payload) => ({type: DELETE, payload})

export const productReducer = (state = products, action) => {
    if (action.type === ADD_PRODUCT) {
        return [...state, action.payload]
    } else if (action.type === DELETE) {
        return state.filter(({id}) => id !== action.payload)
    } else {
        return state
    }
}