import { useState, useEffect } from "react";
import { AutoAnimate } from "./AutoAnimate";
import { Typography, Slider } from "@material-tailwind/react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export default function ImageSlider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 30000); // Change item every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides]);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveIndex(id);
  };

  return (
    <div className="w-full slider h-auto md:h-[400px] flex flex-col md:flex-row gap-6 my-8">
      <AutoAnimate key={activeIndex} classname="w-full md:w-1/2">
        <img src={slides[activeIndex].image} alt="" className="h-full w-full" />
      </AutoAnimate>
      <div className="flex-col w-full md:w-1/2 md:pr-6">
        <h6 className="mb-4 font-black">GOODLIFE</h6>
        <div className="flex flex-row justify-center gap-x-10 my-4">
          {slides.map((item, id) => (
            <div
              className={`border-b-2 mb-4 ${
                activeIndex === id ? "border-black" : "border-gray-200"
              }`}
              key={id}
            >
              <p
                className={`cursor-pointer font-bold ${
                  activeIndex === id ? "text-black" : "text-gray-400"
                }`}
                onClick={(e) => handleClick(e, id)}
              >
                {item.keyTitle}
              </p>
            </div>
          ))}
        </div>
        <AutoAnimate
          key={activeIndex}
          classname="flex flex-col gap-4 overflow-hidden px-8 md:px-4"
        >
          <h4 className="mb-4 text-xl md:text-3xl font-black">
            {slides[activeIndex].title}
          </h4>
          <p className="mb-4">{slides[activeIndex].desc}</p>
        </AutoAnimate>
      </div>
    </div>
  );
}
