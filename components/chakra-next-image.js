import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

export const ChakraNextImage = (props) => {
  const { src, alt, ...rest } = props;
  return (
    <Box position="relative" {...rest}>
      <NextImage layout="fill" src={src} alt={alt} />
    </Box>
  );
};
