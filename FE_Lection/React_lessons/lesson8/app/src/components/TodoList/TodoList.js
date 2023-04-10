import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import s from './TodoList.module.css'

function TodoList(props) {
  const { todos, changeStatus, deleteTodo } = props
  return (
    <div className={s.todos_wrapper}>
      {todos.map(elem => <TodoItem
        key={elem.id}
        id={elem.id}
        title={elem.title}
        completed={elem.completed}
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
      />)}
    </div>
  )
}

export default TodoList
