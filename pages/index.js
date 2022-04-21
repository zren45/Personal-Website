import {
  Box,
  Container,
  Heading,
  Img,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Layout from "../components/layout/article";
import Project from "../components/project";
import thumbPersonal from "../public/images/3d.png";
import thumbMap from "../public/images/map.png";
import thumbRobinhood from "../public/images/robinhood.png";

export default function Home() {
  return (
    <Layout>
      {/* // Self - intro section */}
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
              Hi, I'm Ren.
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
              A Developer.{" "}
            </Heading>
          </Box>

          {/* // profile pic */}
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Img
              src="../images/profile1.jpg"
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="150"
              maxHeight="150"
              display="inline-block"
              borderRadius="full"
              alt="Profile image"
              m={{ md: "50% 0" }}
            />
          </Box>
        </Box>
      </Container>

      {/* project showcase */}
      <Container maxW="container.xl" centerContent>
        <Project>
          <Text fontSize={["sm", "md", "lg", "xl"]} mb={{ base: "1", md: "3" }}>
            Web App
          </Text>
          <Heading
            fontSize={["md", "lg", "xl", "2xl"]}
            mb={{ base: "1", md: "3" }}
          >
            Robinhood-Clone
          </Heading>
          <NextLink href="https://github.com/zren45/Robinhood-Clone" passHref>
            <Link target="_blank">
              <Box borderRadius={20} overflow="hidden" cursor="pointer">
                <Image
                  src={thumbRobinhood}
                  placeholder="blur"
                  alt="robinhood clone"
                  layout="responsive"
                />
              </Box>
            </Link>
          </NextLink>
        </Project>

        <Project>
          <Text fontSize={["sm", "md", "lg", "xl"]} mb={{ base: "1", md: "3" }}>
            Web App
          </Text>
          <Heading
            fontSize={["md", "lg", "xl", "2xl"]}
            mb={{ base: "1", md: "3" }}
          >
            Personal Website
          </Heading>
          <NextLink href="https://github.com/zren45/Personal-Website" passHref>
            <Link target="_blank">
              <Box borderRadius={20} overflow="hidden" cursor="pointer">
                <Image
                  src={thumbPersonal}
                  placeholder="blur"
                  alt="personal website"
                  layout="responsive"
                />
              </Box>
            </Link>
          </NextLink>
        </Project>

        <Project>
          <Text fontSize={["sm", "md", "lg", "xl"]} mb={{ base: "1", md: "3" }}>
            Web App
          </Text>
          <Heading
            fontSize={["md", "lg", "xl", "2xl"]}
            mb={{ base: "1", md: "3" }}
          >
            Tastemap
          </Heading>
          <NextLink href="https://github.com/zren45/Tastemap" passHref>
            <Link target="_blank">
              <Box borderRadius={20} overflow="hidden" cursor="pointer">
                <Image
                  src={thumbMap}
                  placeholder="blur"
                  alt="personal website"
                  layout="responsive"
                />
              </Box>
            </Link>
          </NextLink>
        </Project>
      </Container>
      <Container maxW="150px" pt={10} centerContent>
        <script
          type="text/javascript"
          id="clstr_globe"
          src="//clustrmaps.com/globe.js?d=l3opdF00HHTtye7wf8s1DZWNtF3fgINcSuERpzkyDu8"
        ></script>
      </Container>
    </Layout>
  );
}
