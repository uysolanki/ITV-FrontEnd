import React, { useState } from "react";
import Button from "./Button";
import { RiLogoutCircleLine } from "react-icons/ri";

const HomePage = () => {
  
  const [counter, setCounter] = useState(100);

  function handleCounter(value) {
    setCounter(counter+value)
  }

  return (
    <>
      <Button text='Logout'  onclickhandle={()=>handleCounter(1)} mycolor='green' icon={<RiLogoutCircleLine />} bgcolor={true}/>
      <Button text={undefined}onclickhandle={()=>handleCounter(2)} />
      <Button text='DecrementBy1'  onclickhandle={()=>handleCounter(-1)} />
      <Button text='DeccrementBy2' onclickhandle={()=>handleCounter(-2)}/>
      <span>{counter}</span>
    </>
  );
};

export default HomePage;
