import React, { useState } from 'react'
import './SubscribeButton.css'
const SubscribeButton = () => {
    let [subscribe,setSubscribe]=useState(false)
    let [apple,setApple]=useState('tim')

    function increment(value)
    {
        console.log(value)
        setSubscribe(!subscribe)
    }

    let mango="tom"
    let a=100
 
    return (
    <div>
        <button onClick={()=>{increment(59)}} style={{backgroundColor:subscribe?'red':'green'}}>Subscribe</button>
        {/* <button onClick={handleClick} className={subscribe?'subscribe-button':''}>Subscribe</button> */}
        {a=a+500}
        <button onClick={increment} className={mango='jerry'}>Subscribe</button>
    </div>
  )
}

export default SubscribeButton


