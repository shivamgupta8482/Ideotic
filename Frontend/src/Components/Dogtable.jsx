import React from 'react'
import { TableContainer,Td,Thead,Table,Tr,Tbody,TableCaption } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Dogtable = ({data,id}) => {
const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/${id}`);
      };
  return (
    <TableContainer >
  <Table variant='simple' colorScheme='teal' cursor={"pointer"}>
    
  
    <Tbody>
    <Tr onClick={() => handleClick(id)}>
        <Td>{data}</Td>
       
      </Tr>
     
     
    </Tbody>
   
  </Table>
</TableContainer>
  )
}

export default Dogtable