import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

import {} from "@chakra-ui/react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Layout from "../components/layout/article";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
export default function FirstPost({ posts }) {
  return (
    <Layout title="Post">
      <Container maxW="100%">
        <Heading
          as="h1"
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
          Posts (Testing)
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing="24px">
          {posts.map((post, index) => (
            <Link href={"/blog/" + post.slug} passHref key={index}>
              <Card maxW="md" variant={"outline"}>
                <CardBody>
                  <Image
                    src={post.frontMatter.thumbnailUrl}
                    className="img-fluid mt-1 rounded-start"
                    alt="thumbnail"
                    borderRadius="lg"
                    width={400}
                    height={300}
                    objectFit="cover"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading fontSize={"xl"}>{post.frontMatter.title}</Heading>
                    <Text>{post.frontMatter.description}</Text>
                    <p className="card-text">
                      <small className="text-muted">
                        {post.frontMatter.date}
                      </small>
                    </p>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
        <Box mt={20} align={"center"}>
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
