import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Product from './pages/ProductCard';
import SaveProduct from './pages/SaveProduct';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { Footer } from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import Hero from './pages/Hero';
import Register from './pages/Register';

const App = () => {
  return (
  <>
    <Router>
      <Navbar />
        <Routes>

          <Route path="/" element={<Hero />} />

          <Route path="/products" element={<Products />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/addproduct" element={<SaveProduct />} />

          <Route path="/register" element={<Register />} />

          <Route path='/singleproduct/:productId' element={<SingleProduct/> } />
        </Routes>
        <Footer />
      </Router>
  </>
  )
}

export default App

