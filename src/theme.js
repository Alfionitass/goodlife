import { createTheme } from "@mui/material/styles";
// import GothamBlack from "./fonts/Gotham-Black.ttf";
// import "./fonts/Gotham-Book.otf";

const theme = createTheme({
  typography: {
    fontFamily: ["Gotham", "Arial", "sans-serif"].join(","), // Your custom font first, then fallbacks
    // fontSize: 14,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
    // fontWeightBold: 700,
  },
  //   components: {
  //     MuiCssBaseline: {
  //       styleOverrides: `
  //         @font-face {
  //             font-family: 'Gotham';
  //             src: url('./fonts/Gotham-Black.ttf') format("truetype");
  //             font-weight: bold;
  //             font-style: normal;
  //             font-display: swap;
  //         }
  //         @font-face {
  //             font-family: 'Gotham';
  //             src:url('./fonts/Gotham-Book.otf') format("opentype");
  //             font-weight: normal;
  //             font-style: normal;
  //             font-display: swap;
  //         }
  //         body {
  //             font-family: 'Gotham', Arial, sans-serif;
  //         }
  //       `,
  //     },
  //   },
});

export default theme;
