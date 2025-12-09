import { useNavigate, useParams, Link } from "react-router";
import { products } from "../data/product";
import { slugify } from "../utils/utils";
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

  if (!item) return <h5>Item not found</h5>;

  return (
    <div className="px-4 py-4 md:m-10">
      <div className="flex">
        <div className="flex flex-row">
          <button onClick={goBack}>
            <p className="">{product.title}</p>
          </button>
          <p className="font-medium">{`/ ${item.name}`}</p>
        </div>
      </div>
      <div className="my-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          <div className="w-auto h-auto">
            <img
              className="object-cover w-full h-full"
              src={item.image}
              alt={item.alt}
            />
          </div>
          <div className="flex flex-col justify-normal sm:justify-between text-left gap-8">
            <div className="">
              <h5 className="">{item.name}</h5>
              <p className="mb-4">{item.subName}</p>
              <p className="font-medium mb-4">
                No SKU: <span className="font-normal">{item.skuNo || `-`}</span>
              </p>
              <div className="mb-2">
                <p className="font-medium">Description:</p>
                <p className="font-normal" style={{ whiteSpace: "pre-wrap" }}>
                  {item.desc}
                </p>
              </div>
              {item.subDesc?.map((subItem, subId) => (
                <div key={subId} className="mb-2">
                  {subItem.title ? <p className="">{subItem.title}:</p> : ""}
                  {Array.isArray(subItem.details) ? (
                    subItem.details.map((details, detailsId) => (
                      <ul key={detailsId} className="list-disc">
                        <li>{details}</li>
                      </ul>
                    ))
                  ) : (
                    <p>{subItem.details}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="">
              <p className="font-medium mb-6">
                Price:{" "}
                <span className="font-normal">
                  Rp {item.price.toLocaleString("id-ID") || `-`}
                </span>
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
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
              <p className="font-medium uppercase mb-2">Order Now</p>
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
                {/* {item.marketplace.map((market, id) => (
                  <Link key={id} to={market.link}>
                    <FontAwesomeIcon icon={getIcon(market.icon)} className="text-2xl" />
                  </Link>
                ))} */}
              </div>
            </div>

            {/* shop from platform, button change to Click Here */}
            {/* whatsapp icon, desc: order by whatsapp for special price, button Click Here */}
          </div>
        </div>
      </div>
    </div>
  );
}
