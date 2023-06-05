import React, { useContext } from 'react'
import { CommentContext } from '../../context/CommentContext'
import HandleButton from '../HandleButton/HandleButton'
import s from './AddCommentForm.module.css'

export default function AddCommentForm({ id }) {
  const commentContext = useContext(CommentContext)

  const onSubmit = (e) => {
    e.preventDefault()
    const newComment = e.target.text.value;
    commentContext.addComment(id, newComment)
    e.target.reset()
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='text' />
      <HandleButton text='Add Comment' />
    </form>
  )
}
