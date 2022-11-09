import React from 'react'
import {Link} from "react-router-dom"
import "./navBar.css"
import LoginDrawer from './LoginDrawer'


function Navbar() {

  return (
    <div className='navBar'>
      <Link to="/"><img id='Logo' src={require("./MediCLiQ.png")} alt="" /> </Link>
      <Link to="/appdownload">downloadapp</Link>
      <Link to="/login"><LoginDrawer/></Link>
      <Link to="/offers">offers</Link>
      <Link to="/cart">cart</Link>
    </div>
  )
}

export default Navbar