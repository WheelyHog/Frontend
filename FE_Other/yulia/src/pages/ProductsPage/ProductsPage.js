
import ProductList from '../../components/ProductList/ProductList';

import { useEffect, useState } from "react";
import { getProducts } from '../../request/getProducts';


export default function ProductsPage() {
  const [products, setProducts] = useState([])
  useEffect(() => getProducts(setProducts), [])

console.log(products)

  return (
    <div>
      ProductPage
      <ProductList products={products} />
    </div>
  )
}
