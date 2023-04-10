import React, { useEffect, useState } from 'react'
import Card from './Card'
import styles from './CardContainer.module.css'
import { words } from '../data/words'
import Triggers from "./Triggers";

function CardContainer() {

    let [cards, setCards] = useState(words)


    const submit_form = event => {
        event.preventDefault()
        const { rus, eng } = event.target

        const card = {
            id: Date.now(),
            rus: rus.value,
            eng: eng.value,
            lang: 'eng'
        }
        setCards([...cards, card])

        rus.value = '';
        eng.value = '';
    }

    function triggerRus() {
        cards.forEach(elem => elem.lang = 'rus')
        const newCards = [...cards]
        setCards(newCards)
    }

    function triggerEng() {
        cards.forEach(elem => elem.lang = 'eng')
        const newCards = [...cards]
        setCards(newCards)
    }

    useEffect(() => {
        let cardsItem = JSON.parse(localStorage.getItem('cards')) || cards
        setCards(cardsItem)
    }, [])

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards))
    }, [cards])

    return (
        <div>
            <form onSubmit={submit_form} className={styles.form}>
                <input type='text' placeholder='RUS' name='rus' />
                <input type='text' placeholder='ENG' name='eng' />
                <button>Add card</button>
            </form>
            <div className={styles.card_container}>
                {cards.map(elem => <Card key={elem.id} {...elem} />)}
            </div>
            <Triggers triggerRus={triggerRus} triggerEng={triggerEng} />
        </div>

    )
}

export default CardContainer
