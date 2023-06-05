import React from 'react'
import { useDispatch } from 'react-redux';
import { add_product } from '../../store/productReducer';

export default function AddProductForm() {

  const dispatch = useDispatch()

  const submit_form = (e) => {
    e.preventDefault();
    const { title, price } = e.target
    const product = {
      title: title.value,
      price: price.value
    }
    dispatch(add_product(product))
    e.target.reset()

  }

  return (
    <form onSubmit={submit_form}>
      <input type='text' name='title' placeholder='name' />
      <input type='number' name='price' placeholder='price' />
      <button type='submit'>ADD</button>
    </form>
  )
}
