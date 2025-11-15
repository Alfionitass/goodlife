import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path=":category" element={<Products />}>
        <Route path=":name" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
