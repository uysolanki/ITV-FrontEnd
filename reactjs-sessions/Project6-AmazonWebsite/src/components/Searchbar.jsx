import React from 'react'

const Searchbar = (props) => {
  return (
    <input type="text" placeholder='Search By Product Name' onChange={props.changeHandler}/>
  )
}

export default Searchbar