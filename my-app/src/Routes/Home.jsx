import React from 'react'
import {SearchBar} from "../Components/SearchBar"
import {Category} from "../Components/Category"
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import {Image} from "@chakra-ui/react"
import Slider from "../Components/Slider"

function Home() {
  return (
    <div>
      <SearchBar/>
      
      <Link to="/healthcare"><Category/></Link>
      <Slider/>
      <Image bg="#d7faf8" src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100"/>
      <Footer/>
    </div>
  )
}

export default Home