import React from 'react'
import './Button.css'

const Button = ({text,onclickhandle,mycolor,icon,bgcolor}) => {
    console.log(text)
  return (
   <>
    <button onClick={onclickhandle} className={bgcolor?mycolor:'blue'}
    
    >
        {text}{icon} 
        
    </button>
    <br/>
   </>
  )
}

Button.defaultProps = {
    text: "Apple"       // Default text
};
    
Button.propTypes = {
    text: PropTypes.string
  };

export default Button