import { Banner } from "../components/Banner";
import { Products } from "../components/Products";
import ImageSlider from "../components/ImageSlider";
import { CardWithImage } from "../components/CardWithImage";
import { Shop } from "../components/Shop";
import { Newsletter } from "../components/Newsletter";
import { FeatureWithIcon } from "../components/FeatureWithIcon";
import data from "../data/data.json";

export default function HomePage() {
  return (
    <>
      <Banner banner={data.banner} />
      <Products products={data.products} />
      <ImageSlider slides={data.slides} />
      <CardWithImage data={data.servicesBanner} />
      <Shop onlineStore={data.onlineStore} />
      <Newsletter banner={data.newsBanner} />
      <FeatureWithIcon />
    </>
  );
}
