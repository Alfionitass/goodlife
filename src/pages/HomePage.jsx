import { Banner } from "../components/Banner";
import { Products } from "../components/Products";
import BusinessGoals from "../components/BusinessGoals";
import { CardWithImage } from "../components/CardWithImage";
import { Shop } from "../components/Shop";
import { Newsletter } from "../components/Newsletter";
import { FeatureWithIcon } from "../components/FeatureWithIcon";
import data from "../data/data.json";
import { products } from "../data/product";

export default function HomePage() {
  return (
    <>
      <Banner banner={data.banner} products={products} />
      <Products products={products} />
      <BusinessGoals slides={data.slides} />
      <CardWithImage data={data.servicesBanner} />
      <Shop onlineStore={data.onlineStore} />
      <Newsletter banner={data.newsBanner} />
      <FeatureWithIcon />
    </>
  );
}
