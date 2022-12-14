// 1. Import
import { Icon,Image } from '@chakra-ui/react'
import { BsCart2 } from 'react-icons/bs'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { AiOutlineMobile } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

// 2. Use the `as` prop
function CartIcon() {
  return <Icon boxSize={"1.5em"} as={BsCart2} />
}

function OffersIcon(){
    return <Icon boxSize={"1.5em"} as={MdOutlineLocalOffer}/>
}
function AppIcon(){  
    return <Icon boxSize={"1.5em"} as={AiOutlineMobile}/>
}
function LoginIcon(){  
    return <Icon boxSize={"1.5em"} as={BsPerson}/>
}
function LogoIcon({pr}){
    return <Image pr={pr} height="70px" src={require("./MediCLiQ.png")} alt="" />
}
export {CartIcon,OffersIcon,AppIcon,LoginIcon,LogoIcon}
