import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "./font.css";
import App from "./App.jsx";
import "./fonts/Gotham-Black.ttf";
import "./fonts/Gotham-Book.otf";
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,

  // <StrictMode>
  //   <App />
  // </StrictMode>
);
