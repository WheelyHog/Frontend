import React from 'react'

export default function Product({ title, price }) {
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  )
}
