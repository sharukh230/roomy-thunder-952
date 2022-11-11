import React from 'react'
import {Box,Text,Input,Button,Icon} from "@chakra-ui/react"
import {  BiSearchAlt } from 'react-icons/bi'
import {  TbNotes } from 'react-icons/tb'

function SearchBar() {
  return (
    <Box margin="auto" pl="30rem" pt="2rem">
        <Box display="flex">
            <Text>What are you looking for?</Text>
            <Icon boxSize="2rem" as={ TbNotes}/>
            <Text>Order with prescription. </Text>
            <Button>Upload Now  </Button>

        </Box>
            <Icon boxSize="2rem" as={ BiSearchAlt}/>
            <Input
            width='auto' size='lg'borderRadius="100px" placeholder='Search for  . . .' />
            <Button>Search</Button>

    </Box>
  )
}

export { SearchBar }