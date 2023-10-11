import React, { useState } from 'react';
import './app.css';
import { PostItem } from './components/PostItem/PostItem';

function App() {
  const [posts] = useState(
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

  return (
    <div className='container'>
      <ul className='posts'>
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
