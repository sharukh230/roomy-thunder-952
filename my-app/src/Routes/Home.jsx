import React from 'react'
import {SearchBar} from "../Components/SearchBar"
import {Category} from "../Components/Category"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <SearchBar/>
      
      <Link to="/healthcare"><Category/></Link>
    </div>
  )
}

export default Home