import React, { useState } from 'react';
import './app.css';
import { PostForm } from './components/PostForm/PostForm';
import { PostList } from './components/PostList/PostList';

const visiblePosts = [
  {
    id: 1,
    title: 'JavaScript',
    body: 'JavaScript is awesome'
  },
  {
    id: 2,
    title: 'React',
    body: 'React is awesome'
  },
  {
    id: 3,
    title: 'Node',
    body: 'Node is awesome'
  },
  {
    id: 4,
    title: 'Express',
    body: 'Express is awesome'
  },
  {
    id: 5,
    title: 'MongoDB',
    body: 'MongoDB is awesome'
  },
];

function App() {
  const [posts, setPosts] = useState(visiblePosts);

  return (
    <>
      <PostForm  posts={posts} setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} />
    </>
  );
}

export default App;
