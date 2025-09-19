import { SlideUpAnimate } from "./SlideUpAnimate";
import { Typography, Button } from "@material-tailwind/react";

export function Shop({ onlineStore }) {
  return (
    <div className="my-8 px-4">
      <SlideUpAnimate>
        <h3 className="text-2xl md:text-4xl mb-6 w-full h-full">
          Shop From Your Favorite Platform
        </h3>
      </SlideUpAnimate>
      <SlideUpAnimate classname="grid md:grid-cols-4">
        {onlineStore.map((item, id) => (
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
            <button className="btn-red">
              <p className="text-xs text-white md:text-base uppercase">
                Visit Store
              </p>
            </button>
          </div>
        ))}
      </SlideUpAnimate>
    </div>
  );
}
