import React from 'react'
import Product from '../Product/Product'
import s from './ProductContainer.module.css'

function ProductContainer({ products }) {

  console.log(products);

  return (
    <div className={s.product_container}>
      {products.map((elem, index) => <Product {...elem} key={index} />)}
    </div>
  )
}

export default ProductContainer
