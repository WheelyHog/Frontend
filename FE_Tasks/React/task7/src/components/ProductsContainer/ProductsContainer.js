import React from 'react'
import Product from '../Product/Product'
import s from './ProductsContainer.module.css'

export default function ProductsContainer({ products }) {
  return (
    <div className={s.products_container}>
      {products.map(elem => <Product key={elem.id} {...elem} />)}
    </div>
  )
}
