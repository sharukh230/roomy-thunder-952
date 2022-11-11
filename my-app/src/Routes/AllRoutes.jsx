import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import AppDownload from "./AppDownload"
// import Login from "./Login"
import Offers from "./Offers"
import Cart from "./Cart"
import HealthCare from './HealthCare'
import HealthCareDevices from '../Components/HealthCareDevices'
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/appdownload" element={<AppDownload/>} />
                {/* <Route path="/Login" element={<Login/>} /> */}
                <Route path="/offers" element={<Offers/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/healthcare" element={<HealthCare/>} />
                <Route path="/healthcare/products" element={<HealthCareDevices/>} />
            </Routes>
        </div>
    )
}

export default AllRoutes