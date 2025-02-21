import React from 'react'
import './NavList.css'
import { Link } from 'react-router-dom'

const NavList = () => {

    let ulStyles={display:"flex",listStyle:"none",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"lightgray",color:"black",fontWeight:"bold",fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif'",height:"55px"}
    let liStyles={padding:"17px"};
   // let liHoverStyles={"backgroundColor":"lightpink","cursor":"pointer","border":"1px solid black"}
  return (
    <>
        <ul style={ulStyles}>
        <Link to="/p1">   <li className="listItem" style={liStyles}>Product1</li>  </Link>
        <Link to="/p2">   <li className="listItem" style={liStyles}>Product2</li>  </Link> 
        <Link to="/p3">   <li className="listItem" style={liStyles}>Product3</li>  </Link>
        </ul>
    </>
  )
}

export default NavList