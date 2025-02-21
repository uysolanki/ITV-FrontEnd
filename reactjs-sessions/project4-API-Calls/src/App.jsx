import React from 'react'
import Products1 from './components/Products1'
import Products2 from './components/Products2'
import Products3 from './components/Products3'
import SaveProduct from './components/SaveProduct'
import ShowProducts from './components/ShowProducts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Products3 />} />
        <Route path="/save-product" element={<SaveProduct />} />
        <Route path="/show-all-products" element={<Products3 />} />
      </Routes>
    </Router>
  )
}

export default App