import { useState } from "react";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import { Context } from "./context";
import { posts_data } from "./data";


function App() {
  const [posts, setPosts] = useState(posts_data)

  const changeLike = (id) => {
    posts.forEach(elem => {
      if (elem.id === id) {
        elem.like = !elem.like
      }
    })
    setPosts([...posts])
  }

  const deletePost = (id) => {
    const newPosts = posts.filter(elem => elem.id != id)
    setPosts(newPosts)
  }

  const submitForm = (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      title: e.target.title.value,
      description: e.target.description.value,
      like: false,
      comments: []
    }
    e.target.reset()
    setPosts([...posts, newPost])
  }

  return (
    <div>
      <AddPostForm submitForm={submitForm} />
      <Context.Provider value={{ posts, changeLike, deletePost }}>
        <PostsContainer posts={posts} />
      </Context.Provider>
    </div>
  );
}

export default App;
