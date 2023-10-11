import React from "react";
import { PostItem } from "../PostItem/PostItem";

export const PostList = ({posts, title}) => {
  return (
    <div>
      <h1 className='pastsTitle'>{title}</h1>
      {posts.map(post =>
        <PostItem post={post} key={post.id} />
      )}
    </div>
  )
}