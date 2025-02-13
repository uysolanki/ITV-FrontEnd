import React, { useState } from 'react'
import './SubscribeButton.css'
const SubscribeButton = () => {
    let [subscribe,setSubscribe]=useState(false)

    function handleClick()
    {
        setSubscribe(!subscribe)
    }
 
    return (
    <div>
        <button onClick={handleClick} style={{backgroundColor:subscribe?'red':'green'}}>Subscribe</button>
        <button onClick={handleClick} className={subscribe?'subscribe-button':''}>Subscribe</button>
    </div>
  )
}

export default SubscribeButton