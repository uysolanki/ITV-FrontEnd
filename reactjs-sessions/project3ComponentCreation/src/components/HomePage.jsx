import React, { useEffect, useState } from "react";
import Button from "./Button";
import { RiLogoutCircleLine } from "react-icons/ri";

const HomePage = () => {
  
  const [counter, setCounter] = useState(100);
  const [products,setProducts]= useState({});
  function handleCounter(value) {
    setCounter(counter+value)
  }


  useEffect(                //Dependency Array []  while page loading, use effect code will run
    ()=>{                   //Depedency Array not provided then at the change of each variable
     //setProducts(API call)   //Depedency Array has some variable names then at the change of these variable only use effect code will run
    },[]
  )


  return (
    <>
      <Button text='Logout'  onclickhandle={()=>handleCounter(1)} mycolor='green' icon={<RiLogoutCircleLine />} bgcolor={true}/>
      <Button onClickHandle={()=>handleCounter(2)} />
      <Button text='DecrementBy1'  onclickhandle={()=>handleCounter(-1)} />
      <Button text='DeccrementBy2' onclickhandle={()=>handleCounter(-2)}/>
      <span>{counter}</span>
    </>
  );
};

export default HomePage;


const user = { name: 'John' };

return (
  <div>
    {/* Only render this if user is logged in */}
    {user && <h1>Welcome, {user.name}!</h1>}
  </div>
);