import { CardContent, CardHeader, CardBody, CardFooter } from "./Card";

export function Products({ products }) {

  return (
    <div className="flex flex-col my-8">
      <h4 className="mb-4 text-2xl md:text-3xl font-black">Meet Our New Arrival</h4>
      <div className="relative overflow-auto">
        <div className="md:flex gap-4 grid grid-cols-2 mb-4">
          {products.map((item, id) => (
            <CardContent key={id} className="gap-4">
              <CardHeader>
                <img src={item.image} alt={item.alt} className="w-full h-full rounded-lg md:rounded-2xl" />
              </CardHeader>
              <CardBody className="h-52">
                <h4 className="mb-2 lg:mb-3 text-brand-primary-dark text-base md:text-lg lg:text-xl h-14 lg:h-12">{item.title}</h4>
                <h6 className="mb-3 text-sm lg:text-lg font-normal">{item.desc}</h6>
              </CardBody>
              <CardFooter className="p-3 md:p-6">
                <button className="btn-red">Explore Collection</button>
              </CardFooter>
            </CardContent>
          ))}
        </div>
      </div>
    </div>
  );
}
