import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { root_url } from '..'
import { fetchAllProductsList, fetchProductsListByCat } from '../asyncAction'
import { productListBySale } from '../store/ProductListReducer'


export default function ProductListPage({ type }) {

  const { id } = useParams()

  const titlePage = useSelector(store => store.productList.titlePage)
  const productList = useSelector(store => store.productList.productList)
  let dispatch = useDispatch()

  console.log(titlePage, productList);


  useEffect(() => {
    if (type === 'category') {
      dispatch(fetchProductsListByCat(id))
    } else {
      dispatch(fetchAllProductsList(type))
      if (type === 'sale') {
        dispatch(productListBySale())
      }
    }

  }, [id, type])


  return (
    <div>
      <h2>{titlePage.title}</h2>
      <div className='products_list'>
        {productList.map(elem =>
          <div key={elem.id}>
            <img src={`${root_url}${elem.image}`} alt={elem.title} />
            <h4>{elem.title}</h4>
            <p>{elem.price}</p>
          </div>)}
      </div>
    </div>
  )
}
