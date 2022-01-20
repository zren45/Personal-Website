// import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";
import ThemeToggleButton from "./theme-toggle-button";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("orange.50", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
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
          <NextLink href="/works" passHref>
            <Link p={2}>Work</Link>
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
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts/first-post" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  target="_blank"
                  href="https://github.com/zren45/Personal-Website"
                >
                  Github
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
