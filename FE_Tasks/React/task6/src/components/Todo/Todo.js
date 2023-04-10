import React from 'react'
import s from './Todo.module.css'

function Todo({ todo, completed }) {

  const style = { background: completed ? 'royalblue' : 'lightgrey' }

  return (
    <div className={s.todo_item} style={style}>
      {todo}
    </div>
  )
}

export default Todo
