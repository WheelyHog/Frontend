import React from 'react'
import { useDispatch } from 'react-redux'
import { add_to_cart } from '../../store/cartReducer'

export default function ProductItem({ id, title, price }) {
  const dispatch = useDispatch()
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <div onClick={dispatch(add_to_cart(id))}>Add to Cart</div>
    </div>
  )
}
