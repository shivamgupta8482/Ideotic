import { Box, Heading,Image,Center,Wrap,WrapItem } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
    const { id } = useParams();
    
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false);
    
  
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(`https://dog.ceo/api/breed/${id}/images`);
        const data1 = await response.json();
        setData(data1.message);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    useEffect(() => {
      getData([]);
    }, []);
    console.log(data);
  return (
      <Box w="98%" m="auto">

<Heading>Images of Your Selected Breed</Heading>

        {loading && <Center><Image  
    
    src='https://miro.medium.com/max/1400/1*Gvgic29bgoiGVLmI6AVbUg.gif'
    alt='Dan Abramov'/></Center>}
        
      
        <Wrap spacing='30px' mt="50px">
    {data.map((ele,i)=>{
        return <>
          
  <WrapItem>
    <Center w='180px' h='80px' >
    <Image  boxSize='100px'
    objectFit='cover' key={i} src={ele} alt="" />
    </Center>
  </WrapItem>
 

        </>
    })}


</Wrap>
    </Box>
  )
}

export default SinglePage