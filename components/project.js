import { Container, useColorModeValue, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Project({ children }) {
  return (
    <motion.div
      whileHover={{
        y: -10,

        boxShadow:
          " 7px 7px 10px rgb(161, 117, 235,0.1),15px 15px 15px rgb(160, 233, 255,0.3), -7px -7px 10px rgb(237, 202, 133,0.1),-15px -15px 15px rgb(224, 137,188,0.3)",
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
        borderRadius={30}
        p={(50, 100)}
        textAlign={["left", "right"]}
      >
        {children}
      </Container>
    </motion.div>
  );
}
export default Project;
