import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Products({ products }) {

  return (
    <div className="flex flex-col my-8">
      <h4 className="mb-4 text-2xl md:text-3xl font-black">Meet Our New Arrival</h4>
      <div className="relative overflow-auto">
        <div className="md:flex gap-4 grid grid-cols-2">
          {products.map((item, id) => (
            // <div className="relative" key={id}>
            //   <img src={item.image} alt={item.alt} className="" />
            //   <div className="absolute inset-x-0 inset-y-1/2 grid w-full">
            //     <div className="px-1 md:px-4 lg:px-8">
            //       <h4 className="mb-2 lg:mb-3 text-brand-primary-dark text-base md:text-lg lg:text-xl">{item.title}</h4>
            //       <h6 className="mb-3 text-sm lg:text-lg font-normal">{item.desc}</h6>
            //     </div>
            //   </div>
            // </div>
            <Card key={id} className="">
              <CardHeader className="flex justify-center shadow-none mt-0">
                <img src={item.image} alt={item.alt} className="" />
              </CardHeader>
              <CardBody className="h-40">
                <h4 className="mb-2 lg:mb-3 text-brand-primary-dark text-base md:text-lg lg:text-xl">{item.title}</h4>
                <h6 className="mb-3 text-sm lg:text-lg font-normal">{item.desc}</h6>
              </CardBody>
              <CardFooter>
                <button className="form-btn">Explore Collection</button>
              </CardFooter>
            </Card>
            // <div className="card-content relative flex flex-col bg-clip-border rounded-xl bg-white shadow-md">
            //   <div className="card-header relative mx-6 mt-6 overflow-hidden bg-clip-border rounded-xl bg-white shadow-md">
            //     <img src={item.image} alt={item.alt} className="" />
            //   </div>
            //   <div className="card-body p-6">
            //     <h4 className="mb-2 lg:mb-3 text-brand-primary-dark text-base md:text-lg lg:text-xl">{item.title}</h4>
            //     <h6 className="mb-3 text-sm lg:text-lg font-normal">{item.desc}</h6>
            //   </div>
            //   <div className="card-footer p-6">
            //     <button className="form-btn">Explore Collection</button>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}
