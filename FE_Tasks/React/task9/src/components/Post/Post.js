import React from 'react'
import CommentsContainer from '../CommentsContainer/CommentsContainer'
import s from './Post.module.css'

export default function Post({ id, title, description, comments, like, changeLike, deletePost }) {
  const style = { background: like ? 'brown' : 'royalblue' }
  return (
    <div className={s.post}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={s.comments}>
        <p>Comments:</p>
        {comments.length === 0 ? 'No comments yet' : <CommentsContainer comments={comments} />}
      </div>
      <p className={s.like} style={style} onClick={() => changeLike(id)}>{like ? 'Like' : 'Like?'}</p>
      <div className={s.delete} onClick={() => deletePost(id)}>x</div>
    </div>
  )
}
