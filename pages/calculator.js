import Layout from "../components/layout/article";
import {
    Container,
    Heading,
    Text,
    useColorModeValue,
    Box,
    Button,
  
    Center,
  } from "@chakra-ui/react";
import { useEffect,useState } from "react";

export default function mintCalculator(){
const [gstPrice, setGst] = useState();
const [solPrice, setSol] = useState();

useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana,green-satoshi-token&vs_currencies=usd")
      .then(res => res.json())
      .then(
        (data) => {
          setGst(data['green-satoshi-token'].usd);
          setSol(data.solana.usd)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

return (

<Layout title={'Mint Calculator'}>
<Container>
    Mint Calculator
    <Text>GST Price is {gstPrice}</Text>

    <Text>Solana Price is {solPrice}</Text>
    

</Container>

</Layout>
)
}