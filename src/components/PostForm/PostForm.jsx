import React, { useState } from "react";

import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/FormInput";

export const PostForm = ({ setPosts, posts }) => {
  const [post, setPost] = useState("title: '', descr: ''");

  const addNewPost = (e) => {
    e.preventDefault();

    if (!post.title || !post.descr) {
      alert("fill in the fields");

      return;
    }

    const newPost = {
      id: Date.now(),
      title: post.title,
      descr: post.descr,
    };

    setPost({ title: "", descr: "" });

    setPosts([...posts, newPost]);
  }

  return (
    <form>
      <Input
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        plaseholder="write title"
      />
      <Input
        value={post.descr}
        onChange={e => setPost({ ...post, descr: e.target.value })}
        plaseholder="write descr"
      />
      <Button
        onClick={addNewPost}
      >
        create post
      </Button>
    </form>
  );
};