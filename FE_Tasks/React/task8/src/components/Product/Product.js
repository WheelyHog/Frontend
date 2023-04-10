import React from 'react'
import s from './Product.module.css'

function Product({ title, description, price, images }) {
  return (
    <div className={s.product}>
      <img src={images[1]} />
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{price} $</h4>
    </div>
  )
}

export default Product
