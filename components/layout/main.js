import { Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "../footer";
import MacLoader from "../mac-loader";
import NavBar from "../navbar";

const LazyMac = dynamic(() => import("../mac"), {
  ssr: false,
  loading: () => <MacLoader />,
});

export default function Layout({ children, router }) {
  return (
    <Box pb={8} minH={"100vh"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Zhixiang Ren's portfolio" />
        <meta name="author" content="Zhixiang Ren" />

        <meta property="og:site_name" content="Zhixiang Ren's Homepage" />
        <meta property="og:type" content="website" />

        <title>Zhixiang Ren - Homepage</title>
      </Head>

      <NavBar path={router} />
      {/*   */}

      <Container maxW="container.lg" pt={14} pb={10}>
        <LazyMac />
        {children}
      </Container>

      <Footer />
    </Box>
  );
}
