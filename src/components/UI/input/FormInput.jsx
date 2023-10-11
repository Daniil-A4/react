import React from "react";
import classes from './FormInput.module.css'

export const FormInput = (props) => {
  return (
    <input className={classes.formInput} {...props}/>
  )
}