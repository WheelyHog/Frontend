import ContentFilter from "../ContentFilter/ContentFilter";
import ContentList from "../ContentList/ContentList";
import { useState } from "react";

function Content() {

    const data = [
        { isSale: false, id: 1, name: 'Iphone X', price: 1000, check: true },
        { isSale: false, id: 2, name: 'Samsung S21', price: 250, check: false },
        { isSale: false, id: 3, name: 'Monopod', price: 350, check: true },
        { isSale: false, id: 4, name: 'Samokat', price: 1600, check: false },
        { isSale: false, id: 5, name: 'Xiaomi RedMe', price: 10000, check: false },
    ]

    let [card, setCards] = useState(data)

    const deleteById = () => {
        let result = +prompt('Enter ID')
        let newCards = card.filter(elem => (elem.id !== result))
        setCards(newCards)
    }

    const changeStatus = () => {
        const id = prompt('enter ID')
        let newCards = card.map(elem => {
            if (elem.id == id) {
                elem.check = elem.check == true ? false : true
            }
            return elem
        })
        console.log(newCards)
        setCards(newCards)
    }

    const changePrice = () => {
        const id = prompt('enter ID')
        let newCards = card.map(elem => {
            if (elem.id == id) {
                if (!elem.isSale) {
                    elem.defaultPrice = elem.price
                }
                elem.price = Math.ceil(elem.price * .75)
                elem.isSale = true
            }
            return elem
        })
        setCards(newCards)
    }

    const setDefaultPrice = () => {
        let newCards = card.map(elem => {
            if (elem.isSale == true) {
                elem.price = elem.defaultPrice
                delete elem.defaultPrice
                elem.isSale = false
            }
            return elem
        })
        setCards(newCards)
    }

    return (
        <div>
            <ContentFilter deleteById={deleteById} changeStatus={changeStatus} changePrice={changePrice} setDefaultPrice={setDefaultPrice} />
            <ContentList card={card} />
        </div>
    )
}

export default Content