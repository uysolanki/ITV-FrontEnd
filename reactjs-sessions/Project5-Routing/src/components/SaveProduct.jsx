import React, { useState } from 'react'
//import './SaveProduct.css'
import { useNavigate } from 'react-router-dom';

const SaveProduct = () => {
    const navigate = useNavigate();

    let p1={
        title:'',           // Product title
        price:0,            // Product price
        description:'',     // Product description
        category:'',        // Product category
        image:'',           // Product Image
    }

    const[product,setProduct]=useState(p1)

    async function handleSubmit(event)
    {
        event.preventDefault();
        //alert('Form Submitted')

        try {
            const response = await fetch('http://localhost:8086/saveProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            });

            if (response.ok) {
                const data = await response.json();
                //alert(data.sname + " " +" user registered successfully!");
                alert("Product Added successfully!");
                navigate('/p3');
                console.log(data)
                //resetForm();
            } else {
                alert("Failed to Add Product");
            }
        } catch (error) {
            console.error("Error submitting the form", error);
        }

    }

    function handleChange(event)
    {
       const {name,value} = event.target  //name=title value =T
       setProduct((prev)=>({...prev,[name]:value}))  
    }
  return (
    <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Product Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleChange}
                        value={product.title}
                    />
                </div>

                <div>
                    <label htmlFor="price">Product Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        onChange={handleChange}
                        value={product.price}
                    />
                </div>

                <div>
                    <label htmlFor="description">Product Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        onChange={handleChange}
                        value={product.description}
                    />
                </div>

                <div>
                    <label htmlFor="category">Product Category</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        onChange={handleChange}
                        value={product.category}
                    />
                </div>

                <div>
                    <label htmlFor="image">Product Image</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        onChange={handleChange}
                        value={product.image}
                    />
                </div>

                <div className="button-group">
                    <button type="submit">Register</button>
                    <button type="button">Cancel</button>
                </div>

            </form>

    </div>
  )
}

export default SaveProduct