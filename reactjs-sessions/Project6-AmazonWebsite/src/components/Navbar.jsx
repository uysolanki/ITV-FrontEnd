import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="parent-container">
    <ol className="left-section">
        <li>Home</li>
        <li>Products</li>
        <li>Add Product</li>
    </ol>

    <ol className="right-section">
        <li>Login</li>
        <li>Cart</li>
    </ol>
    </div>
  )
}

export default Navbar