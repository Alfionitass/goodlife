import { SlideUpAnimate } from "./SlideUpAnimate";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

export function Subscribe({ banner }) {
  return (
    <div className="relative h-full w-full my-8">
      <img
        src={banner.src}
        alt="banner"
        className="w-full h-full object-cover hidden md:block"
      />
      <SlideUpAnimate classname="md:absolute inset-y-0 grid place-items-center right w-full md:w-1/2">
        <Card className="md:text-left rounded-none mb-2">
          <CardBody className="text-black">
            <Typography className="text-base md:text-xl font-bold mb-2 uppercase">
              Don't Miss Out
            </Typography>
            <Typography>
              Be the first to hear about promos, new products, and exclusive
              offers. Straight to your inbox.
            </Typography>
          </CardBody>
          <CardFooter className="flex flex-col md:flex-row  gap-4">
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
