import React from 'react'
import styles from './Card.module.css'

function Card({id, rus, eng, lang, changeLang }) {

  const word = lang == 'eng' ? eng : rus
  const card_style = lang == 'eng' ? { backgroundColor: 'royalblue', color: 'white' } : { backgroundColor: 'white', color: 'royalblue' }

  return (
    <div className={styles.card} style={card_style}>
      <p>{word}</p>
    </div>
  )
}

export default Card
