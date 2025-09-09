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
        <Typography className="font-bold uppercase">
          Customer Service
        </Typography>
        <Typography>Contact us at hello@good-life.id</Typography>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 p-4">
        <FontAwesomeIcon icon={faTruck} className="text-5xl mb-4" />
        <Typography className="font-bold uppercase">Free Shipping</Typography>
        <Typography>Free Delivery Across</Typography>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 p-4">
        <FontAwesomeIcon icon={faCreditCard} className="text-5xl mb-4" />
        <Typography className="font-bold uppercase">Secure Payment</Typography>
        <Typography>Trusted payments, your way</Typography>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 p-4">
        <FontAwesomeIcon icon={faMedal} className="text-5xl mb-4" />
        <Typography className="font-bold uppercase">
          30-Day Return Policy
        </Typography>
        <Typography>Your satisfaction is guaranteed</Typography>
      </div>
    </SlideUpAnimate>
  );
}
