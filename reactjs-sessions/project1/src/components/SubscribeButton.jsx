import React from 'react'
import './SubscribeButton.css'
const SubscribeButton = () => {
    let cars=["Audi","BMW","Merc","Honda","Tesla"];
 
    return (
    <div>
        <button>Subscribe</button>
        <ul>
           {
            cars.map(
                (car,index)=>{
                 return <li key={index}>{car} </li>
                }
            )
           }
        </ul>
    </div>
  )
}

export default SubscribeButton