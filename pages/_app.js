import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/main";
import { AnimatePresence } from "framer-motion";
import theme from "../lib/theme";
import Fonts from "../components/fonts";

function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Fonts />
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
