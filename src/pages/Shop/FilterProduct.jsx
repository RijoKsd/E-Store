import { useSelector } from "react-redux";

const FilterProduct = ({ getCategory }) => {
  // api data
  const data = useSelector((store) => store.allProducts.products);

  // get the category of the products and remove the duplicate
  const navLinks = data
    .map((item) => item.category)
    .filter((cat, index, self) => self.indexOf(cat) === index);

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
          <button
            className="btn  btn-neutral capitalize btn-outline "
            onClick={() => getCategory("all")}
          >
            All
          </button>
          {navLinks.map((link, index) => (
            <button
              key={index}
              className="btn  btn-neutral capitalize btn-outline "
              onClick={() => getCategory(link)}
            >
              {link}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterProduct;
