import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductInfoPage() {

  let [product, setProduct] = useState({})
  let { id } = useParams()

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  console.log(product);

  return (
    <div>

    </div>
  )
}

export default ProductInfoPage
