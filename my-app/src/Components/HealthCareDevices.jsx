import { Button, Container, Grid, GridItem } from '@chakra-ui/react';
import React, {useState,useContext,useEffect} from 'react'
import axios from "axios"
import {CartContext} from '../Context/CartContextProvider';
import {Box,Flex,Image,Text} from "@chakra-ui/react"
import {addToCart} from "../Context/CartContextProvider"

const getData=()=>{
  return axios.get("http://localhost:8080/products")
};

const itemAlreadyExists=(id, cartItems)=>{
  if(cartItems.find((item)=>item.id===id)){
    return true;
  }
  return false;
}

function HealthCareDevices() {
 
  const [loading, setLoading] = useState(false);
  const [data,setData] =useState([]);
  const [error, setError] =useState(false);

  const {state, dispatch} = useContext(CartContext);

  useEffect(()=>{
    setLoading(true);
    getData()
    .then((res)=>{
      setData(res.data);
      console.log(res.data);
      setError(false);
    })
    .catch(()=>{
      setError(true);
      setData([])
    })
    .finally(()=>{
      setLoading(false);
    })
  },[])


  if(loading){
    return(
      <div>loading...</div>
    )
  }
  if(error){
    return(
      <div>Error . . . </div>
    )
  }



  return (
    <Container
    maxW={{ base:"full", md:"container.xl"}}
    p={{base:2, lg:0}}
    >
      <Grid
      w="full"
      templateColumns={{
        base: "repeat(1,1fr)",
        md:"repeat(2,1fr)",
        lg:"repeat(3,1fr)"
      }}
      gap={4}
      >
        {data&&data.map((product)=>(
          <GridItem key={product.id}>
            <Box 
            bg="gray.50"
            columns={{sm:2, md:4}}
            spacing="8"
            p={2}
            rounded="lg"
            colour="gray.600"
            boxShadow="lg"
            >
              <Grid templateAreas="repeat(24,1fr)" h="xl">
                <GridItem rowSpan={16}>
                  <Flex align="center" justify="center">
                    <Image
                    boxSize="xs"
                    src={product.imageSrc}
                    alt="prod-img"
                    w="full"
                    h="sm"
                    />
                  </Flex>
                </GridItem>
                <GridItem rowSpan={3}>
                  <Flex align="center" justify="center">
                    <Box>
                      <Text>{product.title}</Text>
                    </Box>
                  </Flex>
                </GridItem>
                <GridItem rowSpan={3}>
                  <Flex align="center" justify="center">
                    <Box>
                      <Text>INR : {product.price}</Text>
                    </Box>
                  </Flex>
                </GridItem>
                <GridItem rowSpan={3}>
                  <Flex align="center" justify="center">
                    <Button
                    colourScheme="gray"
                    varient="outline"
                    disabled={itemAlreadyExists(product.id, state)}
                    onClick={()=>dispatch(addToCart(product))}
                    >
                      Add To Cart
                    </Button>
                  </Flex>
                </GridItem>

              </Grid>
            </Box>
          </GridItem>
        ))
        }
      </Grid>
      </Container>

  )
}

export default HealthCareDevices