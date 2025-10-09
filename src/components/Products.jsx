export function Products({ products }) {

  return (
    <div className="flex flex-col my-8">
      <h4 className="mb-4 text-2xl md:text-3xl font-black">Meet Our New Arrival</h4>
      <div className="relative overflow-auto">
        <div className="md:flex gap-4 grid grid-cols-2">
          {products.map((item, id) => (
            <div className="relative" key={id}>
              <img src={item.image} alt={item.alt} className="" />
              <div className="absolute inset-x-0 inset-y-1/2 grid w-full">
                <div className="px-1 md:px-4 lg:px-8">
                  <h4 className="mb-2 lg:mb-3 text-brand-primary-dark text-base md:text-lg lg:text-xl">{item.title}</h4>
                  <h6 className="mb-3 text-sm lg:text-lg font-normal">{item.desc}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
