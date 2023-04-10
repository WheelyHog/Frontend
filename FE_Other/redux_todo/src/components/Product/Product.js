import {useDispatch} from "react-redux";

const Product =({id, title, price}) =>{
    const dispatch = useDispatch()
    return(
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={() => dispatch({type: 'DELETE', payload: id})}>remove product</button>
            <button onClick={() => dispatch({type: 'ADD_TO_BASKET', payload: id})}>add to basket</button>
        </div>
    )
}

export default Product