import './App.css';
import React, { useEffect,  useState } from "react";
import dataServices from './services/getData'
import Card from './components/Card';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dataServices.getData()
        setData(response);
      } catch (error) {
        console.log(error)
      }
    })();
  }, [])
  
  return (
    <ChakraProvider>
      <div>
        <Card data={data} />
      </div>
    </ChakraProvider>
  );
}

export default App;