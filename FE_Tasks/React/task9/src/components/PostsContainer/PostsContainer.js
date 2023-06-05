import React, { useContext } from 'react'
import { Context } from '../../context'
import Post from '../Post/Post'
import s from './PostsContainer.module.css'

export default function PostsContainer() {
  const { posts, changeLike, deletePost } = useContext(Context)
  return (
    <div>
      {posts.length == 0 ? <p>No Posts</p> : posts.map(elem => <Post key={elem.id} {...elem} changeLike={changeLike} deletePost={deletePost} />)}


    </div>
  )
}
