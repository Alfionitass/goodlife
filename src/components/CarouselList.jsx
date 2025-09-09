import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import image1 from "../assets/001.jpg";

const imageList = [
  {
    image: image1,
    title: "Smart Storage",
    alt: "image 1",
  },
  {
    image: image1,
    title: "Smart Home Appliance (Coming Soon)",
    alt: "image 2",
  },
  {
    image: image1,
    title: "Gadget Accessories (Coming Soon)",
    alt: "image 3",
  },
  {
    image: image1,
    title: "Arti-Q Powerbank (Coming Soon)",
    alt: "image 4",
  },
];

export function CarouselList() {
  let [current, setCurrent] = useState(0);

  let prevImage = () => {
    if (current === 0) setCurrent(imageList.length - 1);
    else setCurrent(current - 1);
  };
  let nextImage = () => {
    if (current === imageList.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="flex flex-col my-8">
      <Typography variant="h1" className="mb-4 text-2xl md:text-3xl">
        Meet Our New Arrival
      </Typography>
      <div className="relative overflow-auto">
        <div
          className={`md:flex gap-4 grid grid-cols-2 transition ease-out duration-400 translate-x-[-${current * 100}]`}
          style={{ transform: `translate-x-[-${current * 100}%]` }}
        >
          {imageList.map((item, id) => (
            <div className="relative" key={id}>
              <img src={item.image} alt={item.alt} className="" />
              <div className="absolute inset-0 grid w-full h-full items-center bg-black/50">
                <div className="w-full px-4">
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-4 text-lg md:text-2xl"
                  >
                    {item.title}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="absolute top-0 h-full w-full flex justify-between items-center text-3xl">
          <button onClick={prevImage}><FaArrowCircleLeft /></button>
          <button onClick={nextImage}><FaArrowCircleRight /></button>
        </div> */}
      </div>
    </div>
  );
}
