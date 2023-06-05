import s from './BasketItem.module.css'
import {useDispatch} from "react-redux";
import {decrCountAction, incrCountAction, removeItemAction} from "../../store/reducer/BasketReducer";

const BasketItem = ({id, title, price, count}) => {
    const dispatch = useDispatch()
    return (
        <div className={s.item}>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <button onClick={() => dispatch(decrCountAction(id))}>-</button>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(incrCountAction(id))}>+</button>
            <button onClick={() => dispatch(removeItemAction(id))}>Remove Product</button>
        </div>
    )
}

export default BasketItem