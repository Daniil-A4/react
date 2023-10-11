import React, { useState } from 'react';
import './app.css';
import { PostList } from './components/PostList/PostList';
import { PostForm } from './components/PostForm/PostForm';


function App() {
  const [posts, setPosts] = useState(
    [
      {
        id: 1,
        title: "post's title 1",
        descr: 'description',
      },
      {
        id: 2,
        title: "post's title 2",
        descr: 'description',
      },
      {
        id: 3,
        title: "post's title 3",
        descr: 'description',
      },
    ]
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className='container'>
      
    </div>
  );
}

export default App;
