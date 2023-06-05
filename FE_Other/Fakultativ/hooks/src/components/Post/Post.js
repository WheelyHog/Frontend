import React from 'react'
import s from './Post.module.css'
import CommentsContainer from '../CommentsContainer/CommentsContainer'
import AddCommentForm from '../AddCommentForm/AddCommentForm'

export default function Post({ id, title, description, comments, isLiked }) {
  const like = isLiked ? "Liked" : "Like"
  return (
    <li className={s.post_item}>
      <h2 className={s.title}>{title}</h2>
      <p>{description}</p>
      <div>{like}</div>
      <CommentsContainer comments={comments} />
      <AddCommentForm id={id} />
    </li>
  )
}
