import React from 'react'
import DayItem from '../DayItem/DayItem'

import styles from './DaysContainer.module.css'


function DaysContainer({ days, tasks, deleteDay }) {

  const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
  console.log(tasks)
  return (
    <div className={styles.days_container}>
      {days.map(elem => <DayItem
        weekday={week[elem]}
        key={elem.id}
        tasks={tasks}

        dayIndex={elem}
        //day = {elem} // проходим по списку дней и берем только один день
        deleteDay={deleteDay} />)}

    </div>
  )
}

export default DaysContainer
