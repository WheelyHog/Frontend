import {useDispatch} from "react-redux";
import {deleteProductAction} from "../../store/reducer/ProductsReducer";
import {addToBasketAction} from "../../store/reducer/BasketReducer";

const Product =({id, title, price}) =>{
    const dispatch = useDispatch()
    return(
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={() => dispatch(deleteProductAction(id))}>remove product</button>
            <button onClick={() => dispatch(addToBasketAction(id))}>add to basket</button>
        </div>
    )
}

export default Product