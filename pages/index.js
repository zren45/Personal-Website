import Head from "next/head";
import Layout from "../components/layout/article";
import {
  Box,
  Container,
  Text,
  Img,
  useColorModeValue,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Project from "../components/project";
import thumbRobinhood from "../public/images/robinhood.png";

export default function Home() {
  return (
    <Layout>
      <Container maxW="100%">
        <Box
          display={{ md: "flex" }}
          justifyContent="space-evenly"
          zIndex={99}
          position="relative"
          w="100%"
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading
              bgGradient={useColorModeValue(
                "linear(to-l,#18c9ff 30%,#8627f1 50%,#f91f63 70%,#ffb420 94%)",
                "linear(to-l, #a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%)"
              )}
              // linear(to-l,#18c9ff 30%,#8627f1 50%,#f91f63 70%,#ffb420 94%) light
              // linear(to-l, #a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%) dark
              bgClip="text"
              fontSize={{ base: "48", md: "8xl" }}
              fontWeight="extrabold"
              letterSpacing={-1}
            >
              Hi, I'm Ren
            </Heading>
            <Heading
              bgGradient={useColorModeValue(
                "linear(to-l,#18c9ff 30%,#8627f1 50%,#f91f63 70%,#ffb420 94%)",
                "linear(to-l, #a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%)"
              )}
              bgClip="text"
              letterSpacing={-1}
              fontSize={{ base: "4xl", md: "6xl" }}
              mt={{ md: 8 }}
            >
              A Developer{" "}
            </Heading>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Img
              src="../images/profile.jpg"
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100"
              maxHeight="100"
              // display="inline-block"
              borderRadius="full"
              alt="Profile image"
              m={{ md: "50% 0" }}
            />
          </Box>
        </Box>
      </Container>
      <Container maxW="container.xl">
        <Project>
          <Text fontSize={["sm", "md", "lg", "xl"]}>Web App</Text>
          <Heading as="h3" fontSize={["md", "lg", "xl", "2xl"]}>
            Robinhood-Clone
          </Heading>
          <Box borderRadius={20} overflow="hidden">
            <Image
              src={thumbRobinhood}
              placeholder="blur"
              alt="robinhood clone"
              layout="responsive"
            />
          </Box>
        </Project>
        <Project>Project 2</Project>
        <Project>Project 3</Project>
      </Container>
    </Layout>
  );
}
