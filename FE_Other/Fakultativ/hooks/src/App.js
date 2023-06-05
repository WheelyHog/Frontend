import { useState } from 'react';
import './App.css';
import AddPostForm from './components/AddPostForm/AddPostForm';
import PostContainer from './components/PostContainer/PostContainer';
import { defaultPosts } from './data/data';
import { CommentContext } from './context/CommentContext'

function App() {
  const [posts, setPosts] = useState(defaultPosts);
  const addPost = (newPost) => {
    setPosts([newPost, ...posts])
  }
  const addComment = (id, newComment) => {
    const tempPosts = [...posts]
    tempPosts.forEach(elem => {
      if (elem.id === id) {
        elem.comments.push(newComment)
      }
    })
    setPosts(tempPosts)
  }
  return (
    <CommentContext.Provider value={{ addComment }}>
      <div>
        <AddPostForm addPost={addPost} />
        <PostContainer posts={posts} />
      </div>
    </CommentContext.Provider>

  );
}

export default App;
