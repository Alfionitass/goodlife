import { SlideUpAnimate } from "./SlideUpAnimate";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faTruck,
  faCreditCard,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

export function FeatureWithIcon() {
  return (
    <SlideUpAnimate classname="grid grid-rows md:grid-cols-4 my-8 gap-8">
      <div className="flex flex-col justify-center items-center gap-2 p-4">
        <FontAwesomeIcon icon={faHeadset} className="text-5xl mb-4" />
        <div>
          <p className="font-black uppercase mb-2">Customer Service</p>
          <p>Contact us at halo@good-life.id</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 p-4">
        <FontAwesomeIcon icon={faTruck} className="text-5xl mb-4" />
        <div>
          <p className="font-black uppercase mb-2">Free Shipping</p>
          <p>Free Delivery Across</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 p-4">
        <FontAwesomeIcon icon={faCreditCard} className="text-5xl mb-4" />
        <div>
          <p className="font-black uppercase mb-2">Secure Payment</p>
          <p>Trusted payments, your way</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 p-4">
        <FontAwesomeIcon icon={faMedal} className="text-5xl mb-4" />
        <div>
          <p className="font-black uppercase mb-2">30-Day Return Policy</p>
          <p>Your satisfaction is guaranteed</p>
        </div>
      </div>
    </SlideUpAnimate>
  );
}
