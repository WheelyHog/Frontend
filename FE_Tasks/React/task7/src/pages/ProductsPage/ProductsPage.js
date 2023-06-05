import React, { useEffect, useState } from 'react'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'

export default function ProductsPage() {
  const prod_url = 'https://api.escuelajs.co/api/v1/products'
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(prod_url)
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  return (
    <div>
      <ProductsContainer products={products} />
    </div>
  )
}
