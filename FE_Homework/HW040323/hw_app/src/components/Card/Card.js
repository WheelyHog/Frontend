import styles from "./Card.module.css"
function Card(props){
    return(
        <div className={styles.card_inner}>
            <h2 className={styles.card_title}>{props.title}</h2>

        </div>
    )
}

export default Card