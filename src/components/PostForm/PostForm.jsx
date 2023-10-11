import React, { useState } from "react";
import { Button } from "../UI/button/Button";
import { FormInput } from "../UI/input/FormInput";

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', descr: '' })
  

  const addNewPost = (e) => {
    e.preventDefault()
    
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({ title: '', descr: '' })
  }

  return (
    <form className='formAddPost'>
      <FormInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type='text'
        placeholder='name post'
      />
      <FormInput
        value={post.descr}
        onChange={e => setPost({...post, descr: e.target.value})}
        type='text'
        placeholder='descr post'
      />
      <Button onClick={addNewPost}>Add post</Button>
    </form>
  )
}