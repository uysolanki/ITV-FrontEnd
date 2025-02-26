import React from 'react'
import { Link } from 'react-router-dom'
import Logo_Img from '../assets/myimages/Logo.png';
import Cart_Img from '../assets/myimages/cart.png';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
            <div className="logo">
                <h1>Amazon.in</h1>
                <img src={Logo_Img} alt="Logo" />
            </div>

    <div className="nav-menu">
      <ul>
        <Link to="/">              <li>Home</li>        </Link>
        <Link to="/products">      <li>Products</li>    </Link>  
        <Link to="/addproduct">    <li>Add Product</li> </Link> 
      </ul>
    </div>

    <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/register'><button>Register</button></Link>
        <Link to='/cart'><img src={Cart_Img} alt="Cart" /></Link>
    </div>
    </div>
  )
}

export default Navbar