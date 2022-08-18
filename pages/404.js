import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

const NotFound = () => {
  return (
    <Container
      zIndex={99}
      position="relative"
      mt={15}
      maxW="60ch"
      centerContent
      pt="16"
    >
      <Heading as="h1">404 Not Found</Heading>
      <Text>Oh no. You just got lost</Text>
      <Text> The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />

      <Box mt={20} align="center">
        <NextLink href="/">
          <Button
            color={useColorModeValue("white", "gray.800")}
            bg={useColorModeValue("purple.900", "orange.100")}
          >
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
