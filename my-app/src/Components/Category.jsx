import React from 'react'
import { Avatar } from './Avatar'
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