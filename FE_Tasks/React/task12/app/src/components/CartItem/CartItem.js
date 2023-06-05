import React from 'react'
import { increment, decrement } from '../../store/cartReducer'

export default function CartItem({ id, count, title, price }) {
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatchEvent(increment(id))}>+</button>
        <button onClick={() => dispatchEvent(decrement(id))}>-</button>
      </div>

    </div >
  )
}
