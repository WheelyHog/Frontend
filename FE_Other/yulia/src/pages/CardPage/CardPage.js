import React from 'react'
import { useParams } from 'react-router-dom'

function CardPage({title,image,price,description}) {
  const { id } = useParams()
console.log(id)
  return (
    <div>
      <h2>{title}</h2>
      <img>{image}</img>
      <h2>{price}</h2>
      <h2>{description}</h2>
      {/* <Rating rating={rating.rate} /> */}
    </div>
  )
}

export default CardPage