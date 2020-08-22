import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Input from './components/Input';
import Post from './components/Post';

let id = 1;
function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (title) => {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id += 1;
  };

  const DeletePost = (id) => {
    const updatePosts = posts.filter((post) => post.id !== id);
    setPosts(updatePosts);
  };
  return (
    <div className='App'>
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          deletePost={DeletePost}
        />
      ))}
    </div>
  );
}

export default App;
