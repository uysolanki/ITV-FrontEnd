import React from 'react'
import products from '../data/products'
const Products1 = () => {

    const jeweleryProducts=products.filter(product=>product.category==="jewelery" )

    console.log(jeweleryProducts)
  return (
    <>
       {
        products.map(
            (product,index)=>{
                    return <div className="card" style={{width: '18rem'}} key={index}>
                    <img className="card-img-top" src={product.image} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <a href="#" className="btn btn-primary">ADD TO CART</a>
                    </div>
                  </div>
            }
        )
       }     
    </>
  )
}

export default Products1