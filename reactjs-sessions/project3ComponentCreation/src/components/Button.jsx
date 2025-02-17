import React from 'react'

const Button = (props) => {
  return (
   <>
    <button onClick={props.onclickhandle} style={{backgroundColor:props.mycolor}}>{props.text} </button>
    <br/>
   </>
  )
}

export default Button