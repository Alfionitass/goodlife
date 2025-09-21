import { useState, useEffect } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function Banner({ banner }) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 500); // Delay before animation starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Carousel className={`mb-8 ${hasLoaded ? 'animate-fadeIn' : 'opacity-0'}`} autoplay="true" loop="true">
      {banner.map((item, id) => (
        <div className="relative h-full w-full" key={id}>
          <img
            src={item.image}
            alt={item.imgAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className={`w-1/2 md:w-full flex flex-col items-center ${hasLoaded ? 'animate-moveUp' : 'opacity-0'}`}>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-4xl lg:text-5xl font-black"
              >
                {item.title}
              </Typography>
              <div className="flex justify-start">
                <Button
                  color="white"
                  className="rounded-full font-light hover:bg-brand-primary-dark hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
