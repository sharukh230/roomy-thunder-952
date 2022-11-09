import React from 'react'
import {Link} from "react-router-dom"
import "./navBar.css"
import LoginDrawer from './LoginDrawer'
import {CartIcon,OffersIcon,AppIcon} from './CartIcon'
import { Box,Flex } from '@chakra-ui/react'


function Navbar() {

  return (
    <Box 
    display="flex" alignItems="center" justifyContent="space-around"
    boxShadow='md' p='0' rounded='md' bg='white'>
      <Box className='LogoContainer'>
        <Link to="/"><img id='Logo' src={require("./MediCLiQ.png")} alt="" /> </Link>

      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" gap="2.5rem">

      <Link to="/appdownload">
        <AppIcon/>
        Download App</Link>
      <Link to="/login"><LoginDrawer/></Link>
      <Link to="/offers">
        <OffersIcon/>Offers
      </Link>
      <Link to="/cart">
        <CartIcon/> Cart
        </Link>
      </Box>
    </Box>
  )
}

export default Navbar