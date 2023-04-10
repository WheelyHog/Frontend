import React from 'react'
import s from './TodoItem.module.css'

function TodoItem(props) {

  const { id, title, completed, changeStatus, deleteTodo } = props

  const styles = { background: completed ? 'green' : 'red' }

  return (
    <div className={s.todo_elem} style={styles} onClick={() => changeStatus(id)} onDoubleClick={() => deleteTodo(id)}>
      <h2>{title}</h2>
      <p>{completed ? 'Done' : 'Undone'}</p>
    </div >
  )
}

export default TodoItem
