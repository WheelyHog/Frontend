import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductList } from '../asyncActions/productList'
import '../index.css'

export default function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector(store => store.productList)
  console.log(products);
  useEffect(() => {
    dispatch(fetchProductList())
  }, [])

  return (
    <div className='products_wrapper'>
      {products.map(
        elem =>
          <div key={elem.id} >
            <img src={elem.image} style={{ width: '100px', height: '100px' }} />
            <p>{elem.title}</p>
          </div>
      )
      }
    </div >
  )
}
