import React, { useState } from "react";
import Button from "./Button";

const HomePage = () => {
  
  const [counter, setCounter] = useState(100);

  function handleIncrementby1() {
    setCounter(counter+1)
  }

  function handleIncrementby2() {
    setCounter(counter+2)
  }

  function handleDecrementby1() {
    setCounter(counter-1)
  }

  function handleDecrementby2() {
    setCounter(counter-2)
  }
  return (
    <>
     
      <Button text='IncrementBy1'  onclickhandle={handleIncrementby1}/>
      <Button text='IncrementBy2'  onclickhandle={handleIncrementby2}/>
      <Button text='DecrementBy1'  onclickhandle={handleDecrementby1}/>
      <Button text='DeccrementBy2' onclickhandle={handleDecrementby2}/>
      <span>{counter}</span>
    </>
  );
};

export default HomePage;
