import { SlideUpAnimate } from "./SlideUpAnimate";
import { Typography, Button } from "@material-tailwind/react";

const shopList = [
  {
    imgSrc:
      "https://good-life.id/wp-content/uploads/2025/07/logo-tiktokshop-1.png",
    alt: "Tiktok Shop",
  },
  {
    imgSrc:
      "https://good-life.id/wp-content/uploads/2025/07/logo-tokopedia.png",
    alt: "Tokopedia",
  },
  {
    imgSrc: "https://good-life.id/wp-content/uploads/2025/07/logo-shopee.png",
    alt: "Shopee",
  },
  {
    imgSrc: "https://good-life.id/wp-content/uploads/2025/07/logo-toco.png",
    alt: "Toco",
  },
];

export function Shop() {
  return (
    <div className="my-8 px-4">
      <SlideUpAnimate>
        <Typography className="text-2xl md:text-4xl font-semibold mb-6 w-full h-full">
          Shop From Your Favorite Platform
        </Typography>
      </SlideUpAnimate>
      <SlideUpAnimate classname="grid md:grid-cols-4">
        {shopList.map((item, id) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center h-28 gap-4"
          >
            <div className="flex justify-center items-center">
              <img
                src={item.imgSrc}
                alt={item.alt}
                className="object-contain h-5 md:h-9 w-auto"
              />
            </div>
            <Button className="bg-brand-secondary-dark hover:bg-brand-primary-dark rounded-full">
              <Typography className="text-xs md:text-base uppercase font-normal">
                Visit Store
              </Typography>
            </Button>
          </div>
        ))}
      </SlideUpAnimate>
    </div>
  );
}
