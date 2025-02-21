import React from 'react'
import './NavList.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const NavList = () => {

    let ulStyles={display:"flex",listStyle:"none",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"lightgray",color:"black",fontWeight:"bold",fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif'",height:"55px"}
    let liStyles={padding:"17px"};
   // let liHoverStyles={"backgroundColor":"lightpink","cursor":"pointer","border":"1px solid black"}

   const navigate=useNavigate()
   
   function handleClick(value)
   {
        switch(value)
        {
            case 'Product1' : navigate("/p1");break;
            case 'Product2' : navigate("/p2");break;
            case 'Product3' : navigate("/p3");break;
        }        
   }
  return (
    <>
        {/* <ul style={ulStyles}>
        <Link to="/p1">   <li className="listItem" style={liStyles}>Product1</li>  </Link>
        <Link to="/p2">   <li className="listItem" style={liStyles}>Product2</li>  </Link> 
        <Link to="/p3">   <li className="listItem" style={liStyles}>Product3</li>  </Link>
        </ul> */}


        <ul style={ulStyles}>
        <li onClick={()=>handleClick('Product1')} className="listItem" style={liStyles}>Product1</li>  
        <li onClick={()=>handleClick('Product2')} className="listItem" style={liStyles}>Product2</li> 
        <li onClick={()=>handleClick('Product3')} className="listItem" style={liStyles}>Product3</li> 
        </ul>
    </>
  )
}

export default NavList