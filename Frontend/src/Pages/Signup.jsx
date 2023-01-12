import React from "react";
import { Box, Heading, Input, Button, Center, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

const toast = useToast();

const handleSignup=()=>{
    const data={
        name:name,
        email:email,
        password:password
    }
    if(name && email && password){
     postdata(data);
     
    
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
const postdata = (data) => {
    fetch('http://localhost:8080/signup', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
  // console.log(data);
   if(data.message=="user already present"){
    toast({
      title: "User Is already Present",
      //description: "We've created your account for you.",
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
    navigate("/login")
   }
   else if(data.message=="sign up successful") {
    toast({
      title: "Sign Up Successful",
      //description: "We've created your account for you.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    navigate("/login")
   }

  
  })
  .catch((error) => {
  
   return error;
  });
  
    
  }

  return (
    <Box
      w="50%"
      m="auto"
      border="2px solid green"
      p="80px"
      mt="100px"
      borderRadius="10px"
    >
      <Heading as="h2" size="2xl" mb="50px">
        Sign Up
      </Heading>
      <Box mt="20px">
        <Input value={name}  onChange={(e)=>setName(e.target.value)} placeholder="enter Name" />
        <Input value={email} onChange={(e)=>setEmail(e.target.value)} mt="10px" placeholder="enter email" />
        <Input value={password} onChange={(e)=>setPassword(e.target.value)} mt="10px" placeholder="enter password" />
        <Center>
          <Button
            size="sm"
            height="48px"
            width="190px"
            border="2px"
            mt="30px"
            borderColor="green.500"
            colorScheme="green"
            onClick={handleSignup}
          >
            SIGNUP
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Signup;
