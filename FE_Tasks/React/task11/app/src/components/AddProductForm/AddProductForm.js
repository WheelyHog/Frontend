import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductAction } from '../../store/reducers/productReducer'

export default function AddProductForm() {

  const dispatch = useDispatch()

  const submit = e => {
    e.preventDefault()
    const { title, price } = e.target
    const product = {
      title: title.value,
      price: price.value
    }
    dispatch(addProductAction(product))
    e.target.reset()
  }

  return (
    <form onSubmit={submit}>
      <input type='text' name='title' />
      <input type='number' name='price' />
      <button>Add Product</button>
    </form>
  )
}
