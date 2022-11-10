import { Box, Image, Text } from "@chakra-ui/react"

export function Avatar({key,src,alt,title}){
    return(
        <Box>
            <Image src={src} alt={alt}/>
            <Text>{title}</Text>

        </Box>
    )
}