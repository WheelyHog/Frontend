import React from 'react'
import styles from './DayItem.module.css'
import Task from '../Tasks/Task'



function DayItem({ weekday, tasks, dayIndex, deleteDay }) {
    console.log(tasks)
    console.log(weekday)
    console.log(dayIndex)

    return (
        <div className={styles.day}>
            <p>{weekday}</p>
            {tasks.map((elem, index) => {
                if (elem.weekday == dayIndex) {
                    return <Task importance={elem.importance}
                        description={elem.description}
                        key={index}
                    />
                }
            })}

            {/* <button onClick={() => deleteDay()}>x</button> */}
        </div>
    )
}

export default DayItem


