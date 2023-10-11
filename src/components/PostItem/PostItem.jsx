import React from 'react';

export const PostItem = ({ post }) => {
  <li key={post.id} className='postItem'>
    <h2 className='postItem__title'>{post.title}</h2>
    <p className='postItem__descr'>{post.descr}</p>
    <button className='postItem__btn'>Delete</button>
  </li>
}