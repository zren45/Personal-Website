// import Logo from "./logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import ThemeToggleButton from "./theme-toggle-button";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      backdropFilter="auto"
      backdropBlur="10px"
      zIndex={999}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <NextLink href="/">
            <Heading as="h1" size="md" cursor="pointer">
              任志祥 Zhixiang Ren
            </Heading>
          </NextLink>
        </Flex>

        {/* Nav bar responsive design :desktop mode */}
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NextLink href="/pronunciation" passHref>
            <Link p={2}>Pronunciation</Link>
          </NextLink>

          <NextLink href="/post" passHref>
            <Link p={2}>Post</Link>
          </NextLink>
          <Link
            target="_blank"
            href="https://github.com/zren45"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            p={2}
          >
            <IoLogoGithub></IoLogoGithub>
            Github
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/zhixiangren"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            p={2}
          >
            <IoLogoLinkedin></IoLogoLinkedin>
            Linkedin
          </Link>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          {/*  Menu icon when in mobile mode */}
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/pronunciation" passHref>
                  <MenuItem as={Link}>Pronunciation</MenuItem>
                </NextLink>
                <NextLink href="/post" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  target="_blank"
                  href="https://github.com/zren45/Personal-Website"
                >
                  Github
                </MenuItem>
                <MenuItem
                  as={Link}
                  target="_blank"
                  href="https://www.linkedin.com/in/zhixiangren"
                >
                  Linkedin
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
