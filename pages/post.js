import Head from "next/head";
import Layout from "../components/layout/article";
import {
  Heading,
  Text,
  Button,
  useColorModeValue,
  Box,
  Container,
  UnorderedList,
  ListItem,
  Center,
  Link,
} from "@chakra-ui/react";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function FirstPost({ allPostsData }) {
  return (
    <Layout title="Post">
      <Container maxW="100%">
        <Heading
          as="h3"
          display={"inline-block"}
          mb={[8, 20]}
          ml={[null, 16]}
          bgGradient={useColorModeValue(
            "linear(to-l,#18c9ff 30%,#8627f1 50%,#f91f63 70%,#ffb420 94%)",
            "linear(to-l, #a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%)"
          )}
          bgClip="text"
          fontSize={{ base: "48", md: "7xl" }}
          textAlign={"left"}
        >
          Posts
        </Heading>
        <Center>
          <Text fontSize={["lg", "xl"]}>
            <UnorderedList spacing={6}>
              {allPostsData.map(({ id, date, title }) => (
                <ListItem key={id}>
                  <Link
                    color={useColorModeValue("purple.900", "orange.100")}
                    href={`/posts/${id}`}
                  >
                    {title}
                  </Link>
                  <br />

                  {date}
                </ListItem>
              ))}
            </UnorderedList>
          </Text>
        </Center>

        <Box mt={20} align={"center"}>
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
