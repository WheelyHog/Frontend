import {useSelector} from "react-redux";
import Product from "../Product/Product";
// import s from '../BasketList/BasketList.module.css'

const ProductsList = () => {

    const products = useSelector(state => state.products);


    return (
        <div>
            {products.map(elem => <Product title={elem.title} price={elem.price} key={elem.id} id={elem.id}/>)}
        </div>
    )
}

export default ProductsList