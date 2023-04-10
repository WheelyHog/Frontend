import React from 'react'

function Block(props) {
  const { id, title, text } = props
  return (
    <div>
      <p>{id}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Block
