import { useNavigate, useParams, Link } from "react-router";
import { products } from "../data/product";
import { slugify } from "../utils/utils";
import ImageSlider from "../components/ImageSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faHeadset,
  faTruck,
  faCreditCard,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

// const faIcon = [{ icon: faTiktok }, { icon: faWhatsapp }];
// const getIcon = (icon) => {
//   faIcon.map((item) => {
//     if (icon == item["icon"]) return item.icon;
//   });
// };

export default function ProductDetails() {
  const { category, name } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => slugify(p.title) === category) || null;

  if (Array.isArray(product.collection) && product.collection.length === 0) {
    return <h5>Product not found for category: {category}</h5>;
  }

  const item =
    product.collection?.find((c) => slugify(c.name) === name) || null;

  const goBack = () => {
    navigate(-1);
  };

  // const subDescData = ({ subItem }) => {
  //   if (subItem.title) {
  //     if (Array.isArray(subItem.details)) {

  //     }
  //   }
  // }

  if (!item) return <h5>Item not found</h5>;

  return (
    <div className="px-6 sm:px-8 lg:px-12 py-4">
      <div className="flex flex-row">
        <button onClick={goBack}>
          <p className="">{product.title}</p>
        </button>
        <p className="font-medium">{`/ ${item.name}`}</p>
      </div>
      <div className="max-w-5xl mx-auto my-10">
        {/* <div className="grid grid-cols-1 sm:grid-cols-[3fr_2fr] gap-8 min-h-[100svh] sm:h-[75vh] lg:h-[80vh]"> */}
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_2fr] gap-8">
          <ImageSlider imageList={item.image} />
          {/* <div className="text-left overflow-y-auto no-scrollbar"> */}
          <div className="text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold">{item.name}</div>
            <div className="mt-2 text-base sm:text-lg lg:text-xl font-bold">
              Rp {item.price.toLocaleString("id-ID") || `-`}
            </div>
            <div className="mt-10">
              <div className="uppercase text-base sm:text-lg lg:text-xl font-bold mb-2">Order Now</div>
              <div className="grid grid-cols-2 justify-center gap-4">
                <Link to="#">
                  <div className="flex flex-row gap-2">
                    <p>Tiktok Shop</p>
                    {/* <FontAwesomeIcon icon={faTiktok} className="text-2xl" /> */}
                  </div>
                </Link>
                <Link to="#">
                  <div className="flex flex-row gap-2">
                    <p>Tokopedia</p>
                  </div>
                </Link>
                <Link to="#">
                  <div className="flex flex-row gap-2">
                    <p>Shopee</p>
                  </div>
                </Link>
                <Link to="#">
                  <div className="flex flex-row gap-2">
                    <p>Toco</p>
                  </div>
                </Link>
                <Link to="#">
                  <div className="flex flex-row gap-2">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <p className="text-sm font-medium">
                      Click here to get special price!
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="flex flex-row gap-2">
                <FontAwesomeIcon icon={faHeadset} className="text-xl" />
                <p className="text-sm">Contact us at halo@good-life.id</p>
              </div>
              <div className="flex flex-row gap-2">
                <FontAwesomeIcon icon={faTruck} className="text-xl" />
                <p className="text-sm">Free shipping & delivery across</p>
              </div>
              <div className="flex flex-row gap-2">
                <FontAwesomeIcon icon={faCreditCard} className="text-xl" />
                <p className="text-sm">Trusted & secure payments</p>
              </div>
              <div className="flex flex-row gap-2">
                <FontAwesomeIcon icon={faMedal} className="text-xl" />
                <p className="text-sm">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-12 lg:my-20 border-black/20 border-t-1" />
        <div className="max-w-2xl flex flex-col gap-2 text-left">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Spesifikasi Produk</div>
          <p className="font-normal">{item.desc || `-`}</p>
          <p className="font-medium">
            No SKU: <span className="font-normal">{item.skuNo || `-`}</span>
          </p>
          {item.subDesc?.map((subItem, subId) => (
            <div key={subId}>
              {subItem.title && !Array.isArray(subItem.details) ? (
                <p className="font-medium">
                  {subItem.title}:{" "}
                  <span className="font-normal">{subItem.details}</span>
                </p>
              ) : (
                <>
                  <p className="font-medium">{subItem.title}:</p>
                  <ul className="list-disc">
                    {subItem.details.map((details, detailsId) => (
                      <li key={detailsId}>{details}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
