import React from 'react';
import { Box, ChakraProvider, Flex, Heading, HStack, IconButton, Spacer, useColorMode, VStack , Link} from '@chakra-ui/react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Center, Square, Circle, Text } from '@chakra-ui/react'


const Footer = () =>{
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
    
   return (
    <>
      <Center
        bg='#337357'
        color='white'

        p='10px'
        fontSize="16px">
            Developed by Sudan Alhilali
    </Center>
    <Center>
    <HStack p={5}>
      <Flex w="100%">
        <a target='_blank' href='https://www.linkedin.com/in/sudan-alhilali/'><IconButton aria-label='linkedin' icon={<FaLinkedin />} isRound={true} onClick={toggleColorMode}></IconButton></a>
        <a target='_blank' href='https://github.com/SudanAlhilali'><IconButton aria-label='github' ml={2} icon={<FaGithub />} isRound={true} ></IconButton></a>
        <IconButton aria-label='sun or moon' ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound onClick={toggleColorMode}></IconButton>
      </Flex>
    </HStack>
    </Center>
    </>
   )
}

export default Footer;