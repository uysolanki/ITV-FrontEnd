import React, { useEffect, useState } from "react";
import axios from "axios";
//import ProductCard from "./ProductCard";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const Products3 = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    loadDataFromAPI();
  }, []);

  async function loadDataFromAPI() {
    const apiResponse = await axios.get("http://localhost:8086/products");
    console.log(apiResponse);
    setProducts(apiResponse.data);
  }

  const handleAddProductClick = () => {
    // Navigate to the save-product route
    navigate('/save-product');
  };

  return (
    <>
      <button onClick={handleAddProductClick} >ADD Product</button>
      <div className="row g-4">
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

          // products.map((product) => (
          //   <ProductCard key={product.id}product={product}/>
          // ))}

          // products.map((product) => (
          //   <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
          //     <div className="card h-100 shadow-sm">
          //       {/* Image with responsive handling */}
          //       {/* <Link to={`/singlepro/${product.id}`}> */}
          //         <div
          //           className="d-flex justify-content-center align-items-center p-3 bg-light"
          //           style={{ height: "200px" }}
          //         >
          //           <img
          //             src={product.image}
          //             className="img-fluid rounded"
          //             alt={product.title}
          //             style={{ maxHeight: "100%", maxWidth: "100%" }}
          //           />
          //         </div>
          //       {/* </Link> */}
          //       <div className="card-body d-flex flex-column">
          //         <h5 className="card-title text-truncate">{product.title}</h5>
          //         <p className="card-text text-truncate">
          //           {product.description}
          //         </p>
          //         <div className="mt-auto">
          //           <p className="text-muted">Category: {product.category}</p>
          //           <p className="fw-bold">Price: ${product.price}</p>
          //           <p className="text-warning">
          //             {/* Rating: {product.rating.rate} ({product.rating.count} reviews) */}
          //           </p>
          //           <button className="btn btn-primary w-100">Buy Now</button>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // ))
        }
      </div>
    </>
  );
};

export default Products3;
