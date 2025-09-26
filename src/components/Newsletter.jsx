import { SlideUpAnimate } from "./SlideUpAnimate";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

export function Newsletter({ banner }) {
  return (
    <div className="relative h-full w-full my-8">
      <img
        src={banner.img}
        alt={banner.alt}
        className="w-full h-full object-cover hidden md:block"
      />
      <SlideUpAnimate classname="md:absolute inset-0 grid items-center w-full md:w-1/2">
        <Card className="md:text-left rounded-none mb-2">
          <CardBody className="md:py-4 md:px-6 lg:p-6 text-black">
            <Typography className="text-base md:text-xl font-black mb-2 uppercase">
              Don't Miss Out
            </Typography>
            <Typography>
              Be the first to hear about promos, new products, and exclusive
              offers. Straight to your inbox.
            </Typography>
          </CardBody>
          <CardFooter className="md:py-4 md:px-6 lg:p-6 flex flex-col md:flex-row  gap-4">
            <Input size="lg" label="example@mail.com" value="" />
            <Button className="bg-brand-secondary-dark rounded-full hover:bg-brand-primary-dark">
              <Typography className="text-sm md:text-base uppercase font-normal">
                Subscribe
              </Typography>
            </Button>
          </CardFooter>
        </Card>
      </SlideUpAnimate>
    </div>
  );
}
