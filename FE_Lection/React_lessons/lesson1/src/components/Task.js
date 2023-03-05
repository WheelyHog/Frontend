import React from 'react'

function Task({ title, completed }) {
  const status = completed ? 'done' : 'not done'

  return (
    <div>
      <p>Task: {title}</p>
      <p>status: {status}</p>
    </div>
  )
}

export default Task
