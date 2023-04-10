import React from 'react'
import { addProduct } from '../../products_req'

function ProductForm() {

  const submit = event => {
    event.preventDefault()
    const { title, price, description } = event.target

    const product = {
      title: title.value,
      price: +price.value,
      description: description.value,
      categoryId: 1,
      images: ['https://img.freepik.com/free-photo/green-apple-with-leaves_1101-453.jpg?t=st=1680141371~exp=1680141971~hmac=eb83da2c463d1eb59c8690d0d5100c760643b5b8a85185a196b1966447e64c64']
    }
    console.log(product);
    addProduct(product)
    event.target.reset()
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input name='title' placeholder='title' type='text'></input>
        <input name='price' placeholder='price' type='text'></input>
        <input name='description' placeholder='description' type='text'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ProductForm
