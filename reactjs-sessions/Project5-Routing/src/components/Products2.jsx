import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Products2 = () => {

    const [products,setProducts]=useState([])

    useEffect(
       ()=>{
        loadDataFromAPI()
       },[]
    )
    
    async function loadDataFromAPI()
    {
            const apiResponse=  await axios.get("https://fakestoreapi.com/products");
            console.log(apiResponse)
            setProducts(apiResponse.data)
    }


    return (
        <>
          <div className="row g-3">
            {
              products.map((product, index) => {
                return (
                  <div className="col-md-4 col-sm-6" key={index}>
                    <div className="card" style={{ width: '18rem' }}>
                      <img className="card-img-top" src={product.image} alt="Card image cap" style={{height:'280px'}}/>
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description.slice(0,50)+'...'}</p>
                        <a href="#" className="btn btn-primary">ADD TO CART</a>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </>
      );      
}

export default Products2