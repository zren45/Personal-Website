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
      bg: mode("#f0e7db", "#111111")(props),
    },
    p: {
      display: "block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      lineHeight: "200%",
    },
    li: {
      display: "list-item",
      textAlign: "-webkit-match-parent",
    },
    ul: {
      paddingInlineStart: "20px",
    },
    ol: {
      display: "block",
      listStyleType: "decimal",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      paddingInlineStart: "40px",
    },
    h1: {
      display: "block",
      fontSize: "2em",
      marginBlockStart: "0.67em",
      marginBlockEnd: "0.67em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      fontWeight: "bold",
    },
    h2: {
      display: "block",
      fontSize: "1.5em",
      marginBlockStart: "0.83em",
      marginBlockEnd: "0.83em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      fontWeight: "bold",
    },
    h3: {
      display: "block",
      fontSize: "1.17em",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      fontWeight: "bold",
    },
    h4: {
      display: "block",
      fontSize: "1em",
      marginBlockStart: "1.33em",
      marginBlockEnd: "1.33em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      fontWeight: "bold",
    },
    h5: {
      display: "block",
      fontSize: "0.83em",
      marginBlockStart: "1.67em",
      marginBlockEnd: "1.67em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      fontWeight: "bold",
    },
    a: {
      color: "#58a6ff",
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
