import {
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const MintCalculator = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setError] = useState(null);
  const [gstPrice, setGst] = useState();
  const [solPrice, setSol] = useState();
  const [gmtPrice, setGmt] = useState();
  const handleChange = (event) => setValue(event.target.value);
  const gstChange = (event) => setGst(event.target.value);
  const gmtChange = (event) => setGmt(event.target.value);
  const [value, setValue] = useState("");
  let profit =
    value * 0.94 - (gstPrice / solPrice) * 100 - (gmtPrice / solPrice) * 130;
  profit = profit.toFixed(4);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana,green-satoshi-token,stepn&vs_currencies=usd"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setGst(data["green-satoshi-token"].usd);
          setSol(data.solana.usd);
          setGmt(data.stepn.usd);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <Container>
      <Text>Stepn Mint Profit Calculator</Text>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon children="GST price" />
          <Input
            type="number"
            placeholder={"$" + gstPrice}
            onChange={gstChange}
            onKeyPress={(event) => {
              if (!/[0-9]|./.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </InputGroup>

        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <InputGroup>
          <InputLeftAddon children="Solana Price" />
          <Input
            placeholder={"$" + solPrice}
            type="number"
            onKeyPress={(event) => {
              if (!/[0-9]|./.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="GMT Price" />
          <Input
            placeholder={"$" + gmtPrice}
            type="number"
            onChange={gmtChange}
            onKeyPress={(event) => {
              if (!/[0-9]|./.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="NFT Floor Price" />
          <Input
            isInvalid
            errorBorderColor="green.300"
            type="number"
            value={value}
            onChange={handleChange}
            placeholder={"◎" + "check in Stepn app"}
            onKeyPress={(event) => {
              if (!/[0-9]|./.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </InputGroup>
      </Stack>

      <Text>
        {" "}
        Profit to mint is {profit} Sol. <br />
        or {(profit * solPrice).toFixed(4)} USD. <br /> or{" "}
        {((profit * solPrice) / gstPrice).toFixed(4)} GST
        <br />
        or {((profit * solPrice) / gmtPrice).toFixed(4)} GMT
      </Text>
    </Container>
  );
};

export default MintCalculator;
