import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container zIndex={99} position="relative" mt={15} maxW="60ch">
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
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
