import Card from "../Card/Card";
import styles from "./Cards.module.css"

function Cards() {
    return (
        <div className={styles.cards_inner}>
            <Card title={"Годовое ТО"} />
            <Card title={"Выравнивание колес"} />
            <Card title={"Настройка переключателей"} />
        </div>
    )
}

export default Cards