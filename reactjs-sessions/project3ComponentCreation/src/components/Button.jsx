import React from 'react'
import './Button.css'
import PropTypes from 'prop-types';

const Button = ({text,onclickhandle,mycolor,icon,bgcolor}) => {
  return (
   <>
    <button onClick={onclickhandle} className={bgcolor?mycolor:'blue'}
    
    >
        {text}{icon} 
        
    </button>
    <br/>
   </>
  )
};

Button.defaultProps = {
    text: 'Apple',  // Default value for text when not passed
};
    
Button.propTypes = {
    text: PropTypes.string
  };

export default Button