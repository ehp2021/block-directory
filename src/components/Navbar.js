import './Navbar.css';
import { Box, Button, HStack, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
   
  return (
    <>
      <HStack spacing='5px'>
        <Box
        p={4}
        shadow='md'
        flex='1'
        >
          <Heading>
            <Link to="/" smooth={true} duration={500} offset={-60}>
              <h1>Healthcare Blockchain Directory</h1>
            </Link>
          </Heading>
          <Text mt={4}></Text>
        </Box>
        <Box p={5}>
          <Link to={'read'} smooth={true} duration={500} spy={true} offset={-60}>
            <Button colorScheme='white' size="sm" variant="outline" >Read</Button>
          </Link>
        </Box>
        <Box p={5}>
          <Link to={'submit'} smooth={true} duration={500} spy={true} offset={-60}>
            <Button colorScheme='white' size="sm" variant="outline" >Submit To Directory</Button>
          </Link>
        </Box>
      </HStack>
    </>
  );
}