import { Box, Image, Text } from "@chakra-ui/react"

export function Avatar({  src, alt, title }) {
    return (
        <Box>
            <Image src={src} alt={alt} />
            <Text>{title}</Text>

        </Box>
    )
}

export function GridCategory({  src, title, discount }) {
    return (
        <Box display="flex" border="1px solid gray" pl="1rem" pb="0.5rem">
            <Box>
                <Image width="100px" src={src} />
            </Box>
            <Box>
                <Text pt="2rem">{title}</Text>
            </Box>
            <Box width="25%" pl="1rem">
                <Text pt="2rem">{discount}</Text>
            </Box>
        </Box>
    )
}