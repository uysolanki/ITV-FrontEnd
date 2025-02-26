import React from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from './ProductCard';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import star from '../assets/myimages/star.png';
import star_dull from '../assets/myimages/star_dull.png';
import './SingleProduct.css'

const SingleProduct = () => {
    const { productId } = useParams();
  
    const [product,setProduct]=useState({})
  
    async function loadProduct()
    {
      const fetchedProduct= await axios.get(`https://fakestoreapi.com/products/${productId}`)
      setProduct(fetchedProduct.data)
      console.log(product)
    }
  
    useEffect(
      ()=>{
        loadProduct()
      },[]
    )
  
    function addToCart(productId)
    {
        alert(`Product ${productId} added to Cart`)
    }
    return (
    <>
     <Breadcrumbs product={product}/>
   
    <div className='productdisplay'>
       <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt={product.title} />
                    {/* <img src={product.image} alt={product.title} />
                    <img src={product.image} alt={product.title} />
                    <img src={product.image} alt={product.title} /> */}
                </div>
                {/* <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div> */}
        </div>
       {/* <ProductCard key={product.id} product={product}/> */}
       <div className="product-display-right">
                <h1>{product.title}</h1>
                <div className="productdisplay-right-star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star_dull} alt="star dull" />
                    <p>(3121)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{product.price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{product.price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-options">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>
                    ADD TO CART
                </button>
                <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
            </div>
      </div>
      <Link to="/">
          <button>Hompage</button>
      </Link>
      </>
    );
  };
  

export default SingleProduct