import styles from './Content.module.css'

// 1) Внутри компонента Content cформировать div элемент с 3 дочерними тегами. 
// div (150/100px) с любым цветом 
// p (цена товара cо скидкой)
// p (процент скидки) (округлить до целого числа)

// Пропсы:
// 1) Цвет картинки
// 2) Цена со скидкой
// 3) Цена без скидки

import React from 'react'

function Content(props) {
  return (
    <div>
      <div className={styles.card} style={{ backgroundColor: props.color }}>
        <p>Price:{props.price}</p>
        <p>Price with discount:{props.discount_price}</p>
        <p>Discount: {100 - (Math.round(props.discount_price * 100 / props.price))}</p>
      </div>
    </div>
  )
}

export default Content
