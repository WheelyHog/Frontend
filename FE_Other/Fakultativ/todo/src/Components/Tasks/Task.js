import React from 'react'
import styles from './Task.module.css'


function Task({ id, importance, description, deleteTask }) {

    const import_difference = { backgroundColor: importance === '1' ? '#e74c3c' : '#1abc9c' }
    console.log(description)
    return (
        <div className={styles.task} style={import_difference}>

            <p>{importance}</p>
            <p>{description}</p>
            {/* <button className={styles.close_mark} onClick={() => deleteTask(id)}>x</button> */}
        </div>
    )
}

export default Task