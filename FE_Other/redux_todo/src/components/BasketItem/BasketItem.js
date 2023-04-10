import s from './BasketItem.module.css'
import {useDispatch} from "react-redux";
const BasketItem = ({id, count}) => {
    const dispatch = useDispatch()
    return (
        <div className={s.item}>
            <p>ID: {id}</p>
            <button onClick={() => dispatch({type: 'DECR_COUNT', payload: id})}>-</button>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({type: 'INCR_COUNT', payload: id})}>+</button>

        </div>
    )
}

export default BasketItem