import React from 'react'

export default function Comment({ comment }) {
  return (
    <div>
      <p>{comment.text}</p>
    </div>
  )
}
