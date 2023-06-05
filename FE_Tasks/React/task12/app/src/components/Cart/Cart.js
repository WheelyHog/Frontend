import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear_cart } from '../../store/cartReducer'
import CartItem from '../CartItem/CartItem'

export default function Cart() {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div>
      {cart.map(el => <CartItem {...el} key={el.id} />)}
      <button onClick={() => dispatch(clear_cart)}>Clear Cart</button>
    </div>
  )
}
