import React from 'react'
import Comment from '../Comment/Comment'
import s from './CommentsContainer.module.css'

export default function CommentsContainer({ comments }) {
  return (
    <div>
      {comments.map((elem, index) => <Comment key={index} comment={elem} />)}
    </div>
  )
}
