import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      align="center"
      opacity={0.4}
      fontSize="sm"
      my={6}
      position={"absolute"}
      bottom={0}
      width={"100%"}
    >
      &copy; {new Date().getFullYear()} Zhixiang Ren. All Rights Reserved.
    </Box>
  );
};

export default Footer;
