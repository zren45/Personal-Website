import { Container, useColorModeValue, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Project({ children }) {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "30px 30px 30px #141414" }}
      transition={{ ease: "easeOut", duration: 0.7 }}
      layout
      style={{ borderRadius: 30, width: "90%" }}
    >
      <Container
        bg={useColorModeValue("white", "#191919")}
        maxW="100%"
        height="xl"
        borderRadius={30}
        displap="flex"
        justifyContent="center"
        alignItems="center"
        mt={20}
      >
        <Center height="100%" width="100%">
          {children}
        </Center>
      </Container>
    </motion.div>
  );
}
export default Project;
