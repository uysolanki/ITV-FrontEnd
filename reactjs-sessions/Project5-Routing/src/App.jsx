import React from "react";
import NavList from "./components/NavList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products1 from "./components/Products1";
import Products2 from "./components/Products2";
import Products3 from "./components/Products3";
import SaveProduct from "./components/SaveProduct";
import SingleProduct from "./components/SingleProduct";

const App = () => {
  return (
    <>
      

      <Router>
      <NavList />
        <Routes>

          <Route path="/" element={<Products1 />} />

          <Route path="/p1" element={<Products1 />} />

          <Route path="/p2" element={<Products2 />} />

          <Route path="/p3" element={<Products3 />} />

          <Route path="/sp" element={<SaveProduct />} />

          <Route path='/singlepro/:id' element={<SingleProduct/> } />
        </Routes>
      </Router>
    </>
  );
};

export default App;
