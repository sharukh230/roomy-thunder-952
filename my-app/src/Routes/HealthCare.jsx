import React from 'react'
import { HealthCareCategory } from '../Components/Category'
import Slider from '../Components/Slider'
import {Link} from "react-router-dom"

function HealthCare() {
  return (
    <div>
        <Slider/>
        <Link to="/healthcare/products">
          <HealthCareCategory/>
        </Link>
        hi
    </div>
  )
}

export default HealthCare