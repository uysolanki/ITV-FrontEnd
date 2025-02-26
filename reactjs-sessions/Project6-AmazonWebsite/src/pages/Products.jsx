import React from 'react'
import './Products.css'
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../pages/ProductCard';
import axios from 'axios'
import CatList from '../components/CatList';
import Searchbar from '../components/Searchbar';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [buproducts,setBuproducts]=useState([]);


  useEffect(() => {
    loadDataFromAPI();
  }, []);

  async function loadDataFromAPI() {
    const apiResponse = await axios.get("https://fakestoreapi.com/products");
    console.log(apiResponse);
    setProducts(apiResponse.data);
    setBuproducts(apiResponse.data);
  }

  const allcat=products.map(    //buproducts.map
    (prod)=> prod.category
  )
  
  let distinctCategories=new Set(allcat)
  const allCat=[...distinctCategories,'All']
  console.log(allCat)

  function filterProductByCategory(value)
    {
      if(value!=='All')
      {
      const filteredProducts=buproducts.filter(
            (prod)=>prod.category===value
          )
      setProducts(filteredProducts);
      }
      else
      {
        setProducts(buproducts);
      }
    }

    function searchProductByName(event){
      const searchedProducts=buproducts.filter((prod) =>prod.title.toLowerCase().includes(event.target.value.toLowerCase()))
      setProducts(searchedProducts);
    }

 return (
        <div className="container my-4">
          <CatList items={allCat} clickHandler={filterProductByCategory}/>
          <Searchbar changeHandler={searchProductByName}/>
          <h1 className="text-center mb-4">Our Products</h1>
          <div className="row">
            {products.map((product) => (
              <ProductCard key={product.id}product={product}/>
            ))}
          </div>
        </div>
      );
    };


export default Products