import { Container, useColorModeValue, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Project({ children }) {
  return (
    <motion.div
      whileHover={{
        y: -10,

        boxShadow:
          "7px 7px 10px rgb(161, 117, 235,0.75),15px 15px 15px rgb(160, 233, 255), -7px -7px 10px rgb(237, 202, 133,0.75),-15px -15px 15px rgb(224, 137,188,1)",
      }}
      transition={{ ease: "easeOut", duration: 0.7 }}
      layout
      style={{
        borderRadius: 30,
        width: "90%",
        marginTop: 100,
      }}
    >
      <Container
        bg={useColorModeValue("white", "#191919")}
        maxW="100%"
        height="xl"
        borderRadius={30}
      >
        <Center height="100%" width="100%">
          {children}
        </Center>
      </Container>
    </motion.div>
  );
}
export default Project;
