import React from 'react'
import HandleButton from '../HandleButton/HandleButton'
import s from './AddPostForm.module.css'

export default function AddPostForm({ addPost }) {

  const onSubmit = (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      title: e.target.title.value,
      description: e.target.text.value,
      isLiked: false,
      comments: []
    }
    addPost(newPost)
    e.target.reset()
  }

  return (
    <div className={s.wrapper}>
      <div className='container'>
        <form className={s.inner} onSubmit={onSubmit}>
          <input type='text' placeholder='Your title' name='title' />
          <input type='text' placeholder='Your text' name='text' />
          <HandleButton text='Publish' />
        </form>
      </div>
    </div>
  )
}
