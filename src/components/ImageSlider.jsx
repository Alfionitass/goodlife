import { useState } from "react";
import { Typography } from "@material-tailwind/react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const imageList = [
  {
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1332",
    keyTitle: "Core Value",
    title: "Create a Space That Inspires Your Best Activities",
    desc: "To truly grasp the essence of life, we believe one must be fully immersed in nature and sustainability. Our ambition is to infuse every product, from initial concept to completion, with this profound love for life, creating a space that inspires your best activities.",
    alt: "image 1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1331",
    keyTitle: "Concept",
    title: "Make your escape, in any style",
    desc: "We seek to create moments of unparalleled serenity and beauty, where life and nature intertwine perfectly.",
    alt: "image 2",
  },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveIndex(id);
  };
  console.log(activeIndex);

  return (
    <div className="w-full slider h-auto md:h-[400px] flex flex-col md:flex-row gap-6 my-8">
      <div className="w-full md:w-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <img
            src={imageList[activeIndex].image}
            alt=""
            className="h-full w-full"
          />
        </AnimatePresence>
      </div>
      <div className="flex-col w-full md:w-1/2">
        <Typography variant="h6" color="black" className="mb-4 text-lg">
          GOODLIFE
        </Typography>
        <div className="flex flex-row justify-center gap-x-10 my-4">
          {imageList.map((item, id) => (
            <div
              className={`border-b-2 mb-4 ${
                activeIndex === id ? "border-black" : "border-gray-200"
              }`}
              key={id}
            >
              <Typography
                variant="h6"
                className={`text-base cursor-pointer ${
                  activeIndex === id ? "text-black" : "text-gray-400"
                }`}
                onClick={(e) => handleClick(e, id)}
              >
                {item.keyTitle}
              </Typography>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-4 overflow-hidden px-8 md:px-4"
          >
            <Typography
              variant="h3"
              color="black"
              className="mb-4 text-xl md:text-3xl"
            >
              {imageList[activeIndex].title}
            </Typography>
            <Typography
              variant="paragraph"
              color="black"
              className="mb-4 text-base"
            >
              {imageList[activeIndex].desc}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
