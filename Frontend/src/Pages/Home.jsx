import { Box } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Dogtable from '../Components/Dogtable';

const Home = () => {
    const [data,setData] = useState([]);
const [fetchdata,setFetchdata]=useState([]);
    const getdata = ()=>{
      
        fetch('https://dog.ceo/api/breeds/list/all')
          .then((response) => response.json())
          .then((dataobj) => {
           //console.log(dataobj);
           setData(dataobj.message);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    
useEffect(()=>{
getdata()
},[])


for(let i in data){
    fetchdata.push(i);
}



  return (
    <Box  w="50%" m="auto" mt="50px" border = "2px solid green" p="30px" borderRadius="10px">
        {
            fetchdata.map(elem=>(
                <Box mt="10px" >
                    <Dogtable key={elem} data={elem} id={elem}/>
                </Box>
            ))
        }

    </Box>
  )
}

export default Home