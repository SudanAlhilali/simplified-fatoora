import React from 'react';
import './App.css';
import { Box, ChakraProvider , FormControl, FormLabel, Input} from '@chakra-ui/react'
import Header from './component/Header'
import Generate from './component/Generate'
import Footer from './component/Footer';

function App() {
  return (
   <ChakraProvider>
     <Header/>
     <Generate/>
     <Footer/>
   </ChakraProvider>
  );
}

export default App;
