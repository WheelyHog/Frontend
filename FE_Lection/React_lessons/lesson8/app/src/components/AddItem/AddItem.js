import React from 'react'
import s from './AddItem.module.css'

function AddItem(props) {
  const { addTodo } = props

  const addHandle = (e) => {
    if (e.key === 'Enter') {
      addTodo(e.target.value)
    }

  }
  return (
    <div className={s.input_container} >
      <input type='text' className={s.input_elem} onKeyDown={addHandle} />
    </div>
  )
}

export default AddItem
