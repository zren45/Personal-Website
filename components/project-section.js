import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Project from "./project-motion";
import Image from "next/image";
import thumbPersonal from "../public/images/3d.png";
import thumbMap from "../public/images/map.png";
import thumbRobinhood from "../public/images/robinhood.png";
function ProjectSection() {
  return (
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
  );
}

export default ProjectSection;
