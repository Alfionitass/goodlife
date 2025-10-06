import "./App.css";
import { AppRoutes } from "./Routes";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import data from "./data/data.json";

function App() {
  return (
    <>
      <NavBar menu={data.menu} logo={data.logo.goodlife} />
      <AppRoutes />
      <Footer menu={data.menu} logo={data.logo.goodlifeWhite} />
    </>
  );
}

export default App;
