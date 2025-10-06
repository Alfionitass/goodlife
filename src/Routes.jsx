import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
