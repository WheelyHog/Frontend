import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product/Product'

export default function ProductsContainer() {

  const products_state = useSelector(state => state.products)

  return (
    <div>
      {products_state.map((elem, index) => <Product {...elem} key={index} />)}
    </div>
  )
}
