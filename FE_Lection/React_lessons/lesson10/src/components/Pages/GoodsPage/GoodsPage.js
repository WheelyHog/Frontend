import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../Card/Card'
import s from './GoodsPage.module.css'

function GoodsPage() {

  const url = 'https://fakestoreapi.com/products'
  let navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(1)
  }

  const goHome = () => {
    navigate('/')
  }

  let [products, setProducts] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])



  return (
    <div className={s.goods_section}>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
      <button onClick={goHome}>Home</button>
      <h1>GoodsPage</h1>
      <div className={s.products_container}>
        {products.map((elem, index) => <Card title={elem.title} key={index} price={elem.price} image={elem.image} id={elem.id} count={elem.rating.count} />)}
      </div>




    </div>
  )
}

export default GoodsPage
