import {useSelector} from "react-redux";
import BasketItem from "../BasketItem/BasketItem";
import s from "./BasketList.module.css";

const BasketList =() =>{
    const {basket, products} = useSelector(state => state)
    const basketDescr = basket.map(item => {
        const product = products.find(({id}) => id === item.id)
        return {...item, ...product}
    })
    return (
        <div className={s.container}>
            {basket.map(elem => <BasketItem key={elem.id} {...elem}/>)}
        </div>
    )
}

export default BasketList