import { useEffect, useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import TodoList from "./components/TodoList/TodoList";
import { TodoContext } from '../src/TodoContext/TodoContext'



function App() {

  const start_todos = [
    { id: 1, title: 'First Task', completed: true },
    { id: 2, title: 'Second Task', completed: false },
    { id: 3, title: 'Third Task', completed: false }
  ]

  let [todos, setTodos] = useState(start_todos)

  const changeStatus = (id) => {
    const newTodos = todos.map(elem => {
      if (elem.id === id) {
        elem.completed = !elem.completed
      }
      return elem
    })
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(elem => elem.id !== id)
    setTodos(newTodos)
  }

  const addTodo = (title) => {
    const todo = {
      id: (Math.max(...todos.map(elem => elem.id)) + 1) < 0 ? 1 : Math.max(...todos.map(elem => elem.id)) + 1,
      title: title,
      completed: false
    }
    setTodos([todo, ...todos])
  }

  useEffect(() => {
    let todosItem = JSON.parse(localStorage.getItem('todos'))
    setTodos(todosItem)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <TodoContext.Provider>
        <AddItem addTodo={addTodo} />
        <TodoList todos={todos} changeStatus={changeStatus} deleteTodo={deleteTodo} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
