import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { CarouselBanner } from "./components/CarouselBanner";
import { CarouselList } from "./components/CarouselList";
import ImageSlider from "./components/ImageSlider";
import { CardWithImage } from "./components/CardWithImage";
import { Shop } from "./components/Shop";
import { Subscribe } from "./components/Subscribe";
import { FeatureWithIcon } from "./components/FeatureWithIcon";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <CarouselBanner />
      <CarouselList />
      <ImageSlider />
      <CardWithImage />
      <Shop />
      <Subscribe />
      <FeatureWithIcon />
      <Footer />
      {/* <p>Click on the Vite and React logos to learn more</p>
       <Typography>Click on the Vite and React logos to learn more</Typography> */}
    </>
  );
}

export default App;
