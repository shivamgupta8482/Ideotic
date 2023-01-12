import { Box, Heading, Input,Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MakeContext } from '../Context/AppContext';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const toast = useToast();

    const {handletoggle} =useContext(MakeContext);

    const navigate=useNavigate();
    const logindata = (data) => {
        fetch('http://localhost:8080/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
       if(data.message=="no such user exists"){
        setEmail("");
        setPassword("");
        toast({
          title: "User Not Found",
          //description: "We've created your account for you.",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
       }
       else if(data.message=="Login successfull") {
       setEmail("");
       setPassword("");
    handletoggle()
     
       localStorage.setItem('token', data.token);
       
       toast({
        title: "LOGIN SUCCESSFULL",
        //description: "We've created your account for you.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
       navigate('/');
        
       }
    
      
      })
      .catch((error) => {
        console.error('Error:', error);
       //return error;
      });
      
        
      }

      const handleLogin=()=>{
        const data={
            
            email:email,
            password:password
        }
        if(email && password){
            logindata(data);
           
           }else{
            toast({
              title: "Fill all details",
              //description: "We've created your account for you.",
              status: 'error',
              duration: 2000,
              isClosable: true,
            })
           }
    }
    
  return (
    <Box w="50%" m="auto">
        <Heading mt="20px">Login</Heading>
        <Box mt="20px">
        <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'/>
        <Input value={password} onChange={(e)=>setPassword(e.target.value)} mt="10px" placeholder='enter password'/>
        <Button   size='sm'
height='48px'
width='190px'
border='2px'
mt="30px"
borderColor='green.500' colorScheme="green" onClick={handleLogin}>LOGIN </Button>
        </Box>
    </Box>
  )
}

export default Login