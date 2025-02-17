import React from 'react'

const Button = ({text,onclickhandle}) => {
  return (
   <>
    <button onClick={onclickhandle}>{text}</button>
    <br/>
   </>
  )
}

export default Button