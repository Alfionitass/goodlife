import { SlideUpAnimate } from "./SlideUpAnimate";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardWithImage({ data }) {
  return (
    <div className="img-fly relative flex flex-col md:flex-row md:justify-end md:items-center h-full w-full my-8">
      <img
        src={data.img}
        alt={data.alt}
        className="md:w-4/5 h-auto object-cover"
      />
      <SlideUpAnimate classname="md:absolute md:right-[40%]">
        <Card className="card-fly md:my-6 md:p-4 w-96 bg-brand-secondary-dark rounded-none md:text-left w-full">
          <CardBody className="text-white">
            <Typography className="text-2xl md:text-3xl font-black mb-2">
              Tailored Services
            </Typography>
            <Typography>
              Whether you’re producing your own goods or reselling quality
              imports, we offer custom solutions for both paths.
            </Typography>
          </CardBody>
          <CardFooter className="flex flex-col md:flex-row gap-4">
            <Button className="text-black text-base bg-white uppercase font-normal rounded-full hover:text-brand-primary-dark">
              I'm a Manufacturer
            </Button>
            <Button className="text-black text-base bg-white uppercase font-normal rounded-full hover:text-brand-primary-dark">
              I'm a Reseller
            </Button>
          </CardFooter>
        </Card>
      </SlideUpAnimate>
    </div>

    // <div className="card mt-6 w-96 bg-secondary-brand-maroon">
    //   <div className="text-white">
    //     <Typography variant="h5" className="mb-2">
    //       Tailored Services
    //     </Typography>
    //     <Typography>
    //       Whether you’re producing your own goods or reselling quality imports, we offer custom solutions for both paths.
    //     </Typography>
    //   </div>
    //   <div className="pt-0">
    //     <Button className="text-black bg-white uppercase font-normal mr-4">I'm a Manufacturer</Button>
    //     <Button className="text-black bg-white uppercase font-normal">I'm a Reseller</Button>
    //   </div>
    // </div>
  );
}
