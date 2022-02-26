import React from 'react'
import {
    Flex,
    Table,
    Thead,
    Tbody,
    Text,
    Tr,
    Th,
    Td,
    TableCaption,
    Box
  } from '@chakra-ui/react'

function Card({data}) {

  return (
      <>
    <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
          overflow="auto"
          bgGradient="linear(to-br, teal.400, purple.300)"
        >
        <Box display='flex' mt='2' alignItems='center' color='red.900' borderWidth='1px' borderRadius='lg'>
            <Table variant='striped'>
                <TableCaption fontSize="3xl">Solteq taulukko</TableCaption>
                <Thead >
                    <Tr>
                        <Th fontSize="2xl">Kuukaudet</Th>
                        <Th fontSize="2xl">kulutus</Th> 
                    </Tr>
                 </Thead>
                 <Tbody >
                    {data.map(kuukaudet => (   
                    <Tr>
                        <Td fontWeight="medium">{kuukaudet.kuukausi} </Td>
                        <Td fontWeight="medium">{Math.round((kuukaudet.kulutus + Number.EPSILON)*100) / 100} Kwh </Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
     </Flex>  
     </>
  )
  
}


export default Card



{/*{data.map(kuukaudet => (
                <li> {kuukaudet.kuukausi} {kuukaudet.kulutus}</li>
                
            ) */}