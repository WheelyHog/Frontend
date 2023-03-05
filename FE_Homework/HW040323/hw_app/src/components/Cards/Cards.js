import Card from "../Card/Card";
import styles from "./Cards.module.css"

function Cards() {
    return (
        <div className={styles.cards_inner}>
            <Card title={"Годовое ТО"} color={"#22356F"}/>
            <Card title={"Выравнивание колес"} color={"#0052C1"}/>
            <Card title={"Настройка переключателей"} color={"#76B58B"}/>
        </div>
    )
}

export default Cards