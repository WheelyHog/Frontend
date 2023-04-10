import React from 'react'
import { Link } from 'react-router-dom'
import s from './Card.module.css'

function Card({ id, title, price, image, count }) {
  return (
    <div className={s.product}>
      <Link to={`/goods/${id}`}>
        <img src={image} />
        <h3>{`${id}. ${title}`}</h3>
        <p>{price} $</p>
        <p>{count}</p>
      </Link>

    </div>
  )
}

export default Card
