import {useDispatch, useSelector} from "react-redux";

const AddProduct = () => {
    // const state = useSelector(state => state)
    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault();
        const {title, price, discount} = e.target

        dispatch({
            type: 'ADD_PRODUCT', payload: {
                id: Date.now(),
                title: title.value,
                price: price.value,
                discount: discount.value
            }
        })

        title.value = '';
        price.value = '';
        discount.value = '';
    }

    return (
        <form onSubmit={submit}>
            <input type='text' name='title'/>
            <input type='number' name='price'/>
            <input type='number' name='discount'/>
            <button>Add Product</button>
        </form>
    )
}

export default AddProduct