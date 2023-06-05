import React from 'react'
import s from './AddPostForm.module.css'

export default function AddPostForm({ submitForm }) {
  return (
    <form onSubmit={submitForm}>
      <input type='text' name='title' placeholder='title' />
      <input type='text' name='description' placeholder='description' />
      <button>Add Post</button>
    </form>
  )
}
