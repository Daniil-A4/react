import React from "react"
import './PostItem.css'
import { Button } from "../UI/button/Button"

export const PostItem = (props) => {
  return (
    <div className="postItem">
      <h2 className="postItem__title">{props.post.title}</h2>
      <p className="postItem__text">{props.post.descr}
      </p>
      <Button className="postItem__btn">delete</Button>
    </div>
  )
}