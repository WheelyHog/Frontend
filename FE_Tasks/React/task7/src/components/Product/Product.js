import React from 'react'
import s from './Product.module.css'

export default function Product({ images, title, price, description }) {

  const style = price > 500 ? 'red' : 'green';

  return (
    <div className={s.product} style={{ borderColor: style }}>
      <img src={images[0]}></img>
      <p>{title}</p>
      <p>{price} $</p>
      <p>{description}</p>
    </div>
  )
}
