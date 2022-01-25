import Layout from "../components/layout/article";
import { Container, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function Pronunciation() {
  return (
    <Layout title="pronunciation">
      <Container pb={8}>
        <Heading
          as="h3"
          mb={8}
          bgGradient={useColorModeValue(
            "linear(to-l,#18c9ff 30%,#8627f1 50%,#f91f63 70%,#ffb420 94%)",
            "linear(to-l, #a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%)"
          )}
          bgClip="text"
        >
          {" "}
          How do you pronounce your name ?{" "}
        </Heading>
        <Text fontSize="lg">
          This is probably the quesion i get asked the most.
          <br />
          So here's how I pronounce my name
        </Text>
      </Container>
    </Layout>
  );
}
