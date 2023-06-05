import React from 'react'
import Post from '../Post/Post'
import s from './PostContainer.module.css'

export default function PostContainer({ posts }) {
  return (
    <div className={s.wrapper}>
      <div className='container'>
        {<ul className={s.post_list}>
          {posts.map((elem, index) => <Post key={index} {...elem} />)}
        </ul>}
      </div>
    </div>
  )
}
