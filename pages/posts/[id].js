import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Date from "../../components/date";
import Layout from "../../components/layout/article";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout title={postData.id}>
      <Container maxW={"100%"}>
        <Heading
          as="h3"
          display={"inline-block"}
          mb={[8, 20]}
          bgGradient={useColorModeValue(
            "linear(to-l,#18c9ff 30%,#8627f1 50%,#f91f63 70%,#ffb420 94%)",
            "linear(to-l, #a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%)"
          )}
          bgClip="text"
          fontSize={{ base: "4xl", md: "6xl" }}
          textAlign={"left"}
        >
          {postData.title}
        </Heading>
      </Container>
      <Container>
        <Text color={"gray.400"}>
          <Date dateString={postData.date} />
        </Text>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </Container>
      <Box mt={20} align={"center"}>
        <Link href="/post">
          <Button
            color={useColorModeValue("white", "gray.800")}
            bg={useColorModeValue("purple.900", "orange.100")}
          >
            Return to post
          </Button>
        </Link>
      </Box>
    </Layout>
  );
}
