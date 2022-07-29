import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      align="center"
      opacity={0.4}
      fontSize="sm"
      position={"absolute"}
      bottom={0}
      width={"100%"}
      height={"2.5rem"}
    >
      &copy; {new Date().getFullYear()} Zhixiang Ren.
    </Box>
  );
};

export default Footer;
