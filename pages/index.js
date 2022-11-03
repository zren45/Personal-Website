import {
  Box,
  Container,
  Heading,
  Img,
  Link,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { ChakraNextImage } from "../components/chakra-next-image";
import ProjectSection from "../components/project-section";
import Layout from "../components/layout/article";
import NextLink from "next/link";

export default function Home() {
  return (
    <Layout>
      {/* // Self - intro section */}
      <Container maxW="100%">
        <Box
          className="header"
          display={{ md: "flex" }}
          justifyContent="space-evenly"
          zIndex={99}
          position="relative"
          w="100%"
        >
          {/* // profile pic */}
          <Center display="flex" mt="2" alignItems="center">
            <ChakraNextImage
              src="/images/profile1.jpg"
              borderColor="whiteAlpha.800"
              borderWidth={2}
              alt="Profile image"
              h={150}
              w={150}
              borderRadius="full"
              overflow="hidden"
            ></ChakraNextImage>
          </Center>
          {/* name */}
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
              letterSpacing="tighter"
            >
              Hi <br></br>
              I&apos;m{" "}
              <NextLink href="/pronunciation" passHref>
                <Link>Ren.</Link>
              </NextLink>
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
            ></Heading>
          </Box>
        </Box>
      </Container>

      {/* project showcase */}

      <Container
        className="clustrmap-tracking"
        maxW="150px"
        pt={10}
        centerContent
      >
        <script
          type="text/javascript"
          id="clstr_globe"
          src="//clustrmaps.com/globe.js?d=l3opdF00HHTtye7wf8s1DZWNtF3fgINcSuERpzkyDu8"
        ></script>
      </Container>
    </Layout>
  );
}
