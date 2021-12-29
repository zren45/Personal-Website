// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const fonts = {
  heading: "'Merriweather'",
  body: "'Inter'",
};

// 3. extend the theme
const theme = extendTheme({ config, styles, fonts });

export default theme;
