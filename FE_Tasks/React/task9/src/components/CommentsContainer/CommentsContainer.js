import React from 'react'
import Comment from '../Comment/Comment'

export default function CommentsContainer({ comments }) {
  return (
    <div>
      {comments.map((el, index) => <Comment key={index} comment={el} />)}
    </div>
  )
}
