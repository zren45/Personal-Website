import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiFillSound } from "react-icons/ai";
import Layout from "../components/layout/article";

export default function Pronunciation() {
  const playZhixiang = () => {
    const audio = new Audio("/renzhixiang.mp3");
    audio.play();
  };
  const playRen = () => {
    const audio = new Audio("/ren.mp3");
    audio.play();
  };
  return (
    <Layout title="Pronunciation">
      <Container pb={8} maxW="container.lg" centerContent>
        <Heading
          as="h1"
          mb={[8, 20]}
          ml={[null, 16]}
          bgGradient={useColorModeValue(
            "linear(to-l,#18c9ff 30%,#8627f1 50%,#f91f63 70%,#ffb420 94%)",
            "linear(to-l, #a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%)"
          )}
          bgClip="text"
          maxW={"100%"}
          fontSize={{ base: "48", md: "7xl" }}
          textAlign={"left"}
        >
          How do you pronounce your name ?
        </Heading>
        <Text fontSize="xl" mb={[8, 20]}>
          This is probably the question I get asked the most. So here's how to
          pronounce my name
        </Text>

        <SimpleGrid columns={[1, null, 3]} spacing={10} mb={20}>
          <Button
            colorScheme={useColorModeValue("white", "gray.800")}
            variant="outline"
            onClick={playZhixiang}
            leftIcon={<AiFillSound />}
          >
            {" "}
            <Text fontSize={["large", "xl"]}>Zhixiang Ren</Text>
          </Button>
          <Center>
            I know it's hard 🤣 <br />
            so I usually go by{" "}
          </Center>
          <Button
            colorScheme={useColorModeValue("white", "gray.800")}
            onClick={playRen}
            variant={"outline"}
            leftIcon={<AiFillSound />}
          >
            <Text fontSize={["large", "2xl"]}> Ren</Text>
          </Button>
        </SimpleGrid>

        <Box my={6} align={"center"}>
          <Link href="/">
            <Button
              color={useColorModeValue("white", "gray.800")}
              bg={useColorModeValue("purple.900", "gray.50")}
            >
              Return to home
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
}
