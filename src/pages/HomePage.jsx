import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Products } from "../components/Products";
import ImageSlider from "../components/ImageSlider";
import { CardWithImage } from "../components/CardWithImage";
import { Shop } from "../components/Shop";
import { Subscribe } from "../components/Subscribe";
import { FeatureWithIcon } from "../components/FeatureWithIcon";
import { Footer } from "../components/Footer";
import data from "../data/data.json";

export default function HomePage() {
  return (
    <>
      <NavBar logo={data.logo.goodlife} />
      <Banner banner={data.banner} />
      <Products products={data.products} />
      <ImageSlider slides={data.slides} />
      <CardWithImage />
      <Shop onlineStore={data.onlineStore} />
      <Subscribe banner={data.subsBanner} />
      <FeatureWithIcon />
      <Footer logo={data.logo.goodlifeWhite} />
    </>
  );
}
