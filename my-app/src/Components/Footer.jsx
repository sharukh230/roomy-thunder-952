import React from 'react'
import {Box,Text} from "@chakra-ui/react"
import { Icon,Image } from '@chakra-ui/react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'



function Footer() {
  return (
    <Box bg="#eef4ff">
    <Box display="flex" alignItems="center" justifyContent="space-around">
        <Box>
            <Text>Company</Text>
            <Text>About Us</Text>
            <Text>Careers</Text>
            <Text>Blog</Text>
            <Text>Partner with PharmEasy</Text>
            <Text>Sell at Pharmeasy</Text>
            <Text>Our Services</Text>
            <Text>Order Medicine</Text>
            <Text>Healthcare Products</Text>
            <Text>Lab Tests</Text>
            <Text>Find Nearest Collection Center</Text>
            <Text>Surgeries</Text>
        </Box>
        <Box>
            <Text>Featured Categories</Text>
            <Text>Pet Care</Text>
            <Text>Personal Care</Text>
            <Text>Healthcare Devices</Text>
            <Text>Health Food and Drinks</Text>
            <Text>Beauty</Text>
            <Text>Elderly Care</Text>
            <Text>Home Care</Text>
            <Text>Mother and Baby Care</Text>
            <Text>Skin Care</Text>
            <Text>Fitness Supplements</Text>
            <Text>Diabetic Care</Text>
            <Text>Sexual Wellness</Text>
            <Text>Ayurvedic Care</Text>
            <Text>Health Condition</Text>
            <Text>Accessories & Wearables</Text>
            <Text>Top Products</Text>
        </Box>
        <Box>
            <Text>Need Help</Text>
            <Text>Browse All Medicines</Text>
            <Text>Browse All Molecules</Text>
            <Text>Browse All Cities</Text>
            <Text>Browse All Areas</Text>
            <Text>Browse All Stores</Text>
            <Text>FAQs</Text>
            <Text>Policy info</Text>
            <Text>Editorial Policy</Text>
            <Text>Privacy Policy</Text>
            <Text>Vulnerability Disclouser Policy</Text>
            <Text>Terms and Conditions</Text>
            <Text>Customer Support Policy</Text>
            <Text>Return Policy</Text>

        </Box>
        <Box>
            <Text>Follow us on</Text>
            <Box display="flex">
            <Icon as={AiOutlineInstagram} />
            <Icon as={FaFacebook} />
            <Icon as={AiFillYoutube} />
            <Icon as={AiOutlineTwitter} />
            </Box>
        </Box>
    </Box>
    <Box>
        <Text>Our Payment Partners</Text>
        <Box display="flex" gap="20px">
            <Image src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0"/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0"/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0"/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0"/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0"/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0"/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0"/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0"/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0"/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0"/>

        </Box>
    </Box>
    </Box>
  )
}

export default Footer