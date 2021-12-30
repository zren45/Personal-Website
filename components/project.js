import { Container, useColorModeValue, Center } from "@chakra-ui/react";

function Project({ children }) {
  return (
    <Container
      bg={useColorModeValue("white", "#191919")}
      maxW="90%"
      height="md"
      borderRadius={30}
      displap="flex"
      justifyContent="center"
      alignItems="center"
      mt={290}
    >
      <Center height="100%">{children}</Center>
    </Container>
  );
}
export default Project;
