import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Products } from "../components/Products";
import ImageSlider from "../components/ImageSlider";
import { CardWithImage } from "../components/CardWithImage";
import { Shop } from "../components/Shop";
import { Newsletter } from "../components/Newsletter";
import { FeatureWithIcon } from "../components/FeatureWithIcon";
import { Footer } from "../components/Footer";
import data from "../data/data.json";

export default function HomePage() {
  return (
    <>
      <NavBar menu={data.menu} logo={data.logo.goodlife} />
      <Banner banner={data.banner} />
      <Products products={data.products} />
      <ImageSlider slides={data.slides} />
      <CardWithImage data={data.servicesBanner} />
      <Shop onlineStore={data.onlineStore} />
      <Newsletter banner={data.newsBanner} />
      <FeatureWithIcon />
      <Footer menu={data.menu} logo={data.logo.goodlifeWhite} />
    </>
  );
}
