import React, { useContext } from 'react'
import { CartContext } from "../Context/CartContextProvider";
import { checkout, removeFromCart } from "../Context/CartContextProvider"
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Center, Table, TableCaption, TableContainer, Tbody, Thead, useDisclosure } from '@chakra-ui/react';
import {Box, Th,Tr,Td,Tfoot} from "@chakra-ui/react"

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleCheckout = () => {
    dispatch(checkout());
    onClose();
  }

  return (
    <Box>
      <TableContainer mt={{ base: 20, sm: 20, md: 28, lg: 32 }}>
        <Table
          variant="simple" colorScheme="gray" size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
        >
          <TableCaption>
            No Exchange | No Refunds
          </TableCaption>
          <Thead>
            <Tr>
              <Th fontSize={{ base: "xs", md: "md" }}>Product</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>Price(INR)</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>Remove From Cart</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state.map((cartItem) => (
              <Tr key={cartItem.id}>
                <Td fontSize={{ base: "xs", md: "md" }}>{cartItem.title}</Td>
                <Td fontSize={{ base: "xs", md: "md" }}>{cartItem.price}</Td>
                <Td fontSize={{ base: "xs", md: "md" }}>
                  <Button onClick={() => dispatch(removeFromCart(cartItem.id))}>
                    Remove From Cart
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th fontSize={{ base: "xs", md: "md" }}>Final Price</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>

                {Math.round(state.reduce((a,c)=>a+c.price,0))}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Center mt={{base:4, md:8}}>
        <Button variant="outline" colorScheme="gray" onClick={onOpen}>
          Place Order
        </Button>

        <AlertDialog 
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Place Order
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure you want to place this Order ?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colourScheme="red" onClick={handleCheckout} ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Center>
    </Box>
  )
}

export default Cart