import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export function Products({ products }) {
  let [current, setCurrent] = useState(0);

  // let prevImage = () => {
  //   if (current === 0) setCurrent(products.length - 1);
  //   else setCurrent(current - 1);
  // };
  // let nextImage = () => {
  //   if (current === products.length - 1) setCurrent(0);
  //   else setCurrent(current + 1);
  // };

  return (
    <div className="flex flex-col my-8">
      <h4 className="mb-4 text-2xl md:text-3xl font-black">Meet Our New Arrival</h4>
      <div className="relative overflow-auto">
        <div className="md:flex gap-4 grid grid-cols-2">
          {products.map((item, id) => (
            <div className="relative" key={id}>
              <img src={item.image} alt={item.alt} className="" />
              <div className="absolute inset-x-0 inset-y-1/2 grid w-full">
                <div className="px-1 md:px-4">
                  <h4 className="mb-2 lg:mb-3 text-brand-secondary-dark text-lg md:text-xl lg:text-2xl">{item.title}</h4>
                  <h6 className="mb-3 text-sm lg:text-xl font-normal">{item.desc}</h6>
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
