import React from 'react'
import './Button.css'

const Button = (props) => {
  
  return (
    <>
        <button onClick={props.onclickhandler}>{props.text}</button>
    </>
  )
}

export default Button