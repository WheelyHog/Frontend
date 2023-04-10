import React from 'react'
import s from './Content.module.css'

function Content({ image, title, text, dir, background }) {

  return (
    <section className={s.section} style={{ flexDirection: dir, background: background }}>

      <img src={image} alt='#' />
      <div className={s.inner}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}

export default Content
