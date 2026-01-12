import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { slugify } from "../utils/utils";

export function Banner({ banner, products }) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 500); // Delay before animation starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Carousel
      className={`mb-8 ${hasLoaded ? "animate-fadeIn" : "opacity-0"}`}
      autoplay="true"
      loop="true"
    >
      {banner.map((bannerItem, bannerId) => {
        const matchedProduct = products.find(
          (product) => bannerItem.alt === product.link,
        );
        return (
          <div className="relative h-full w-full" key={bannerId}>
            <img
              src={bannerItem.image}
              alt={bannerItem.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
              <div
                className={`w-1/2 md:w-full flex flex-col items-center ${hasLoaded ? "animate-moveUp" : "opacity-0"}`}
              >
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-xl md:text-4xl lg:text-5xl font-black"
                >
                  {bannerItem.title}
                </Typography>
                <div className="flex justify-start">
                  {matchedProduct && (
                    <Link
                      to={slugify(matchedProduct.title)}
                      state={matchedProduct}
                    >
                      <Button
                        color="white"
                        className="rounded-full font-light hover:bg-brand-primary-dark hover:text-white"
                      >
                        Learn More
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
