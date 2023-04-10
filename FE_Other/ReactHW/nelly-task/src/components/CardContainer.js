import React, { useState } from 'react'
import Card from './Card'
import styles from './CardContainer.module.css'
import { words } from '../data/words'

function CardContainer() {

  let [updatedWords, setWords] = useState(words)
  const [inputRus, setInputRus] = useState('Rus')
  const [inputEng, setInputEng] = useState('Eng')
  let [rus, setRus] = useState('')
  let [eng, setEng] = useState('')

  const addWord = () => {

    let newWord = {
      id: updatedWords.length + 1,
      rus: `${inputRus}`,
      eng: `${inputEng}`,
      lang: 'eng'
    }
    setWords([...updatedWords, newWord])
  }

  const setLangRus = () => {
    rus = 'rus'
    updatedWords = updatedWords.map(elem => elem.lang = rus)
    setRus(updatedWords)
  }

  const setLangEng = () => {
    eng = 'eng'
    updatedWords = updatedWords.map(elem => elem.lang = eng)
    setEng(updatedWords)
  }

  const changeLang = (id) => {
    updatedWords = updatedWords.map(elem => {
      if(elem.id == id){
        elem.lang= elem.lang == 'rus' ? 'eng' : 'rus'
      }
      return elem
    })
    setWords(updatedWords)
  }

  const deleteCard = (id) => {
    updatedWords = updatedWords.filter(elem => elem.id !== id)
    setWords(updatedWords)
  }

  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <input type='text' value={inputRus} onChange={(e) => setInputRus(e.target.value)} />
        <input type='text' value={inputEng} onChange={(e) => setInputEng(e.target.value)} />
        <button onClick={addWord}>Add Card</button>
      </div>
      <div className={styles.card_container}>
        {updatedWords.map(elem => <Card key={elem.id} {...elem} lang={elem.lang} changeLang={changeLang} id={elem.id} deleteCard={deleteCard}/>)}
      </div>
      <button onClick={setLangRus}>Rus</button>
      <button onClick={setLangEng}>Eng</button>
    </div>
  )
}

export default CardContainer
