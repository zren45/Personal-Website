import { Container, useColorModeValue, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Project({ children }) {
  return (
    <motion.div
      whileHover={{ y: -20 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Container
        bg={useColorModeValue("white", "#191919")}
        maxW="90%"
        height="xl"
        borderRadius={30}
        displap="flex"
        justifyContent="center"
        alignItems="center"
        mt={20}
      >
        <Center height="100%">{children}</Center>
      </Container>
    </motion.div>
  );
}
export default Project;
