import { Flex, Avatar, Box, Heading, Text } from "@chakra-ui/react";
import { ChakraNextImage } from "../components/chakra-next-image";

const MeetMe = () => {
  return (
    <Flex>
      <Flex flex="1" gap="4" alignItems="center">
        <Avatar name="Zhixiang Ren" size="lg" src="/images/profile1.jpg" />

        <Box>
          <Heading size="sm">Zhixiang Ren</Heading>
          <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default MeetMe;
