import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure,Input,Button,Text
  } from '@chakra-ui/react'
  import {LoginIcon} from "./CartIcon"

  function LoginDrawer(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} onClick={onOpen}>
          <LoginIcon/>
          Hello, Login
        </Button>
        <Drawer 
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Quick Login / Register</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Enter your phone number' />
              <h1>.</h1>
              <Button pl="6.3rem" pr="6.3rem" backgroundColor='#10847E' color="white">Send OTP</Button>
              <Text fontSize='xs'>By Clicking continue, you agree with our privacy policy</Text>
            </DrawerBody>

          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default LoginDrawer