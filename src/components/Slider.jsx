import { useState } from "react";
import { Typography, Carousel } from "@material-tailwind/react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import image1 from "../assets/001.jpg";

const imageList = [
  {
    image:
      "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1331",
    title: "Make your escape, in any style",
    desc: "We seek to create moments of unparalleled serenity and beauty, where life and nature intertwine perfectly.",
    alt: "image 1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1332",
    title: "Create a Space That Inspires Your Best Activities",
    desc: "To truly grasp the essence of life, we believe one must be fully immersed in nature and sustainability. Our ambition is to infuse every product, from initial concept to completion, with this profound love for life, creating a space that inspires your best activities.",
    alt: "image 2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1332",
    title: "Create a Space That Inspires Your Best Activities",
    desc: "To truly grasp the essence of life, we believe one must be fully immersed in nature and sustainability. Our ambition is to infuse every product, from initial concept to completion, with this profound love for life, creating a space that inspires your best activities.",
    alt: "image 3",
  },
];

export function Slider() {
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
    <div className="slider-list">
      {imageList.map((item, id) => (
        <div className="slider-item overflow-hidden absolute" key={id}>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={item.image}
              alt={item.alt}
              className="banner-img w-full h-full object-cover relative"
            />
            <div className="content">
              <Typography variant="h6" color="black" className="mb-4 text-lg">
                GOODLIFE
              </Typography>
              <Typography
                variant="h1"
                color="black"
                className="mb-4 text-lg md:text-3xl"
              >
                {item.title}
              </Typography>
              <Typography
                variant="paragraph"
                color="black"
                className="mb-4 text-lg"
              >
                {item.desc}
              </Typography>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute top-[90%] h-full w-full flex justify-between text-3xl">
        <button onClick={prevImage}>
          <FaArrowCircleLeft />
        </button>
        <button onClick={nextImage}>
          <FaArrowCircleRight />
        </button>
      </div>
    </div>

    // <div className="slider-list">
    //   <div className="slider-item">
    //     <img
    //       src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1331"
    //       alt=""
    //       className=""
    //     />
    //     <div className="flex-col">
    //       <Typography variant="h6" color="black" className="mb-4 text-lg">
    //         GOODLIFE
    //       </Typography>
    //       <Typography
    //         variant="h1"
    //         color="black"
    //         className="mb-4 text-lg md:text-4xl"
    //       >
    //         lorem ipsum
    //       </Typography>
    //       <Typography
    //         variant="paragraph"
    //         color="black"
    //         className="mb-4 text-lg"
    //       >
    //         lorem ipsum
    //       </Typography>
    //     </div>
    //   </div>
    //   <div className="slider-item">
    //     <img
    //       src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1332"
    //       alt=""
    //       className=""
    //     />
    //     <div className="flex-col">
    //       <Typography variant="h6" color="black" className="mb-4 text-lg">
    //         GOODLIFE
    //       </Typography>
    //       <Typography
    //         variant="h1"
    //         color="black"
    //         className="mb-4 text-lg md:text-4xl"
    //       >
    //         lorem ipsum
    //       </Typography>
    //       <Typography
    //         variant="paragraph"
    //         color="black"
    //         className="mb-4 text-lg"
    //       >
    //         lorem ipsum
    //       </Typography>
    //     </div>
    //   </div>
    //   <div className="slider-item">
    //     <img
    //       src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1332"
    //       alt=""
    //       className=""
    //     />
    //     <div className="flex-col">
    //       <Typography variant="h6" color="black" className="mb-4 text-lg">
    //         GOODLIFE
    //       </Typography>
    //       <Typography
    //         variant="h1"
    //         color="black"
    //         className="mb-4 text-lg md:text-4xl"
    //       >
    //         lorem ipsum
    //       </Typography>
    //       <Typography
    //         variant="paragraph"
    //         color="black"
    //         className="mb-4 text-lg"
    //       >
    //         lorem ipsum
    //       </Typography>
    //     </div>
    //   </div>
    // </div>
  );
}
