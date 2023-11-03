import { PostItem } from '../PostItem/PostItem';
import './PostList.css';

export const PostList = ({ posts, setPosts }) => {
  return (
    <>
      <h1 className='posts__title'>Posts</h1>
      <ul className='post__list'>
        {posts.map(post => (
          <PostItem post={post} key={post.id} setPosts={setPosts} posts={posts} />
        ))}
      </ul>
    </>
  );
};