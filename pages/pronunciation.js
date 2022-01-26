import Layout from "../components/layout/article";
import Link from "next/link";
import {
  Container,
  Heading,
  Text,
  useColorModeValue,
  Box,
  Button,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import sound from "../public/renzhixiang.mp3";
import ren from "../public/ren.mp3";

export default function Pronunciation() {
  const playZhixiang = () => {
    const audio = new Audio(sound);
    audio.play();
  };
  const playRen = () => {
    const audio = new Audio(ren);
    audio.play();
  };
  return (
    <Layout title="Pronunciation">
      <Container pb={8}>
        <Heading
          as="h3"
          mb={8}
          bgGradient={useColorModeValue(
            "linear(to-l,#18c9ff 30%,#8627f1 50%,#f91f63 70%,#ffb420 94%)",
            "linear(to-l, #a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%)"
          )}
          bgClip="text"
          maxW={"100%"}
        >
          How do you <br></br>
          pronounce your name
        </Heading>
        <Text fontSize="lg" mb={8}>
          This is probably the question I get asked the most. So here's how to
          pronounce my name
        </Text>
        <SimpleGrid columns={[1, 3]} spacing={10} mb={20}>
          <Button
            colorScheme={useColorModeValue("white", "gray.800")}
            variant="outline"
            height={["60px", "80px"]}
            onClick={playZhixiang}
          >
            {" "}
            <Text fontSize={["large", "xl"]}>Zhixiang Ren</Text>
          </Button>
          <Center>But you can call me </Center>
          <Button
            colorScheme={useColorModeValue("white", "gray.800")}
            variant="outline"
            height={["60px", "80px"]}
            onClick={playRen}
          >
            <Text fontSize={["large", "2xl"]}> Ren</Text>
          </Button>
        </SimpleGrid>

        <Box my={6} align={"center"}>
          <Link href="/">
            <Button
              color={useColorModeValue("white", "gray.800")}
              bg={useColorModeValue("purple.900", "orange.100")}
            >
              Return to home
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
}
