import React, { useEffect, useState } from 'react'
import { getTodos } from "../../request/todos_req";
import Todo from '../Todo/Todo';
import s from './TodosContainer.module.css'

function TodosContainer() {

  const [todos, setTodos] = useState([])

  useEffect(() => getTodos(setTodos), []);

  return (
    <div className={s.todos_container}>
      {todos.map(el => <Todo key={el.id} {...el} />)}
    </div>
  )
}

export default TodosContainer
