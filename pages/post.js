import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/article";
import {
  Heading,
  Text,
  Button,
  useColorModeValue,
  Box,
  Container,
} from "@chakra-ui/react";

export default function FirstPost() {
  return (
    <Layout title="Post">
      <Container>
        <Heading my={6}> In Progress</Heading>
        <Text my={6}>Weeely Task Report and Study Plan</Text>
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
