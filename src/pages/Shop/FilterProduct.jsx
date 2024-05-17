const FilterProduct = () => {
  return (
    <div className="flex  flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-semibold animate-fade-in-down  ">
        Choose Your Product
      </h1>
      <p className="text-xs text-center md:text-sm mt-2 animate-fade-in-down">
        We handpick each item to ensure top-notch quality.
      </p>

      {/*  this is the filter product component that will be used in the filter product page*/}
      <div className=" mt-5 animate-tilt">
        <ul className="flex flex-wrap justify-center gap-2 md:gap-9">
          <li className="btn btn-outline  ">All</li>
          <li className="btn btn-outline"> Men&#39;s Clothing</li>
          <li className="btn btn-outline">Electronics</li>
          <li className="btn btn-outline">Jewelery </li>
          <li className="btn btn-outline"> Women&#39;s Clothing</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterProduct;
