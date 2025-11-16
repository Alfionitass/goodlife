import "./App.css";
import { AppRoutes } from "./Routes";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import data from "./data/data.json";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar menu={data.menu} logo={data.logo.goodlife} />
      <div className="grow">
        <AppRoutes />
      </div>
      <Footer menu={data.menu} logo={data.logo.goodlifeWhite} />
    </div>
  );
}

export default App;
