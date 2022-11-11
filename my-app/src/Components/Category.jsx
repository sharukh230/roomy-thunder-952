import React from 'react'
import { Avatar, GridCategory } from './Avatar'
import { Box } from "@chakra-ui/react"


function Category() {
    const property = [
        {
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            imageAlt: 'Rear view of modern home with pool',
            title: 'Medicine',
            id:1
        },
        {
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0',
            imageAlt: 'Rear view of modern home with pool',
            title: 'LabTests',
            id:2
        },
        {
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0',
            imageAlt: 'Rear view of modern home with pool',
            title: 'HealthCare',
            id:3
        },
        {
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0',
            imageAlt: 'Rear view of modern home with pool',
            title: 'Health Blogs',
            id:4
        },
        {
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0',
            imageAlt: 'Rear view of modern home with pool',
            title: 'PLUS',
            id:5
        },
        {
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0',
            imageAlt: 'Rear view of modern home with pool',
            title: 'Offers',
            id:6
        },
        {
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=720x0',
            imageAlt: 'Rear view of modern home with pool',
            title: 'Surgeries',
            id:7
        },
        {
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0',
            imageAlt: 'Rear view of modern home with pool',
            title: 'Value Store',
            id:8
        }

    ]
    
    const diffCategory = property.map((prop)=>(
        <Avatar
            key={prop.id}
            src={prop.imageUrl}
            alt={prop.imageAlt}
            title={prop.title}
        />    
    ))
    return (
        <Box pl="9rem" pr="9rem" display="flex" gap="30px">
            {diffCategory}
        </Box>
    )
}

export { Category }

function HealthCareCategory(){
    const healthcat=[
        {
            id:1,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:2,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:3,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:4,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:5,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:6,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:7,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:8,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:9,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:10,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:11,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:12,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:13,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:14,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:15,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
        {
            id:16,
            imageUrl: 'https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0',
            title: 'Medicine',
            discount:"Upto 30% off",
        },
    ]
    const healthCategory=healthcat.map((prop)=>(
        <GridCategory
        key={prop.id}
        src={prop.imageUrl}
        title={prop.title}
        discount={prop.discount}
        />
    ))
    return (
        <Box display="grid" gridTemplateColumns="repeat(3,1fr)" width="60%" margin="auto" gap="20px" height="">
            {healthCategory}
        </Box>
    )
}
export {HealthCareCategory}