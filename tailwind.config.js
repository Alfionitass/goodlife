/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
import defaultTheme from "tailwindcss/defaultTheme";

export default withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // custom: ["Gotham", "Arial", "sans-serif"], // 'custom' is your utility class name
        sans: ['"Gotham"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-primary": {
          middle: "#BB3C41",
          light: "#B66163",
          dark: "#BC2E32",
        },
        "brand-secondary": {
          light: "#EB0000",
          dark: "#890508",
        },
      },
      fontSize: {
        "3xl": ["2rem", "2.25rem"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        moveUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        moveUp: "moveUp 1.6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
});

// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
