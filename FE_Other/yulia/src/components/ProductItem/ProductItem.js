import React from 'react'
import Rating from '../Rating/Rating'
import CardPage from '../../pages/CardPage/CardPage'
import { NavLink } from 'react-router-dom'



export default function ProductItem({ title, price, rating,id }) {
  const link = `/products/${id}`
  return (
    <div style={{ border: '1px solid black' }}>
      

      <NavLink to={link} ><h2 >{title}</h2></NavLink>

      <h4>{price}</h4>
      <Rating rating={rating.rate} />
    </div>
  )
}
