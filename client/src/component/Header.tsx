import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Center, Square, Circle, Text } from '@chakra-ui/react'


const Header = () =>{
    
   return (
    <><Center bg='#337357' h='40px' color='white' fontSize='x-large'>
         Simplified Fatoora
        </Center>
      <Center
        as="h2"
        bg='#337357'
        color='#C0C0C0'
        pb='20px'>
            Generate QRCode and Scan QRCode
    </Center>
    <Center>
        <Box color='red' as='b'>
            Note:
        </Box>
        <Text pl='5px' as='b' fontSize='14px'> The Website does not store any informations</Text>
    </Center></>
   )
}

export default Header;