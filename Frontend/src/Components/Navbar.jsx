import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MakeContext } from '../Context/AppContext'
const Navbar = () => {
    const {isAuth,handletoggle} = useContext(MakeContext);
    console.log(isAuth)
  return (
    <Box w="80%" m="auto" display="flex" justifyContent="flex-end" gap="15px"  p="10px" position="sticky" top="0" bg="white">
        <NavLink to="/"> <Button colorScheme="pink">Home</Button></NavLink>
        <NavLink to="/login">{
            isAuth?<Button colorScheme="pink" onClick={handletoggle}>LOGOUT</Button>:<Button>LOGIN</Button>
        }</NavLink>
        <NavLink to="/signup"> <Button colorScheme="pink">SIGNUP</Button></NavLink>
       

    </Box>
  )
}

export default Navbar