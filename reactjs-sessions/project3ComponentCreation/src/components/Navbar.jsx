import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const fruits=["Apple","Mango","Banana","Cherry","Papaya","Watermelon"]
    

  return (
        <ol>
            {fruits.map(
                (fruit)=><li>{fruit}</li>  
            )}
        </ol>
  )
}

export default Navbar