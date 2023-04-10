import {useSelector} from "react-redux";
import BasketItem from "../BasketItem/BasketItem";
import s from "./BasketList.module.css";

const BasketList =() =>{
    const basket = useSelector(state => state.basket)
    return (
        <div className={s.container}>
            {basket.map(elem => <BasketItem key={elem.id} {...elem}/>)}
        </div>
    )
}

export default BasketList