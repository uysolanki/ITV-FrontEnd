import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import SaveProduct from './pages/SaveProduct';
import Cart from './pages/Cart';
import Login from './pages/Login';
import HeroPage from './pages/HeroPage';

const App = () => {
  return (
  <>
    <Router>
      <Navbar />
        <Routes>

          <Route path="/" element={<HeroPage />} />

          <Route path="/products" element={<Products />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/addproduct" element={<SaveProduct />} />

          <Route path='/product/:productId' element={<Product/> } />
        </Routes>
      </Router>
  </>
  )
}

export default App