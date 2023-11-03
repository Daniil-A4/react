import { Button } from '../UI/button/Button';
import './PostItem.css'

export const PostItem = ({ post, setPosts, posts }) => {

  const deletePost = () => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <li className='post__item' key={post.id}>
      <div className='post__content'>
        <h2 className='post__item-title'>{post.title}</h2>
        <p className='post__item-body'>{post.body}</p>
      </div>
      <Button
        onClick={deletePost}
      >
        delete
      </Button>
    </li>
  );
}