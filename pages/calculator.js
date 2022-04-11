import Layout from "../components/layout/article";
import {
    Container,
    Heading,
    Text,
    useColorModeValue,
    Box,
    Button,
    Center,
    Input,
    InputLeftAddon,
    InputRightAddon,
    Stack,
    InputGroup
  } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import App from "next/app";

export default function mintCalculator(){
const [gstPrice, setGst] = useState();
const [solPrice, setSol] = useState();
const handleChange = (event) => setValue(event.target.value);
const gstChange = (event) => setGst(event.target.value);
const [value, setValue] = useState('');
let profit = value*0.94 - (gstPrice/solPrice*220)
profit = profit.toFixed(4)

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
    <Text>Stepn Mint Profit Calculator</Text>
    <Stack spacing={4}>
  <InputGroup>
    <InputLeftAddon children='GST price' />
    <Input type='number' placeholder= {'$' + gstPrice} onChange={gstChange} onKeyPress={(event) => {
        if (!/[0-9]|./.test(event.key)) {
          event.preventDefault();
        }
      }}/>
  </InputGroup>

  {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
  <InputGroup >
    <InputLeftAddon children='Solana Price' />
  <Input placeholder={'$' + solPrice}  onKeyPress={(event) => {
        if (!/[0-9]|./.test(event.key)) {
          event.preventDefault();
        }
      }}/>   
  </InputGroup>
  <InputGroup >
 
    <InputLeftAddon children='NFT Floor Price' />
    <Input  isInvalid
    errorBorderColor="green.300" type='number' value={value} onChange={handleChange} placeholder={'◎' + 'check in Stepn app'} onKeyPress={(event) => {
        if (!/[0-9]|./.test(event.key)) {
          event.preventDefault();
        }
      }}   />
    
  </InputGroup>
</Stack>

    <Text> Profit to mint is {profit} Sol.  <br />{(profit*solPrice).toFixed(4)} USD. <br /> {(solPrice/gstPrice).toFixed(4)} GST</Text>

</Container>

</Layout>
)
}