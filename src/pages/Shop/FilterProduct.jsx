import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/shop/all"
            className={({ isActive }) =>
              isActive
                ? "btn  btn-neutral capitalize"
                : "btn btn-outline capitalize"
            }
            onClick={() => getCategory("all")}
          >
            All
          </NavLink>
          {navLinks.map((link, index) => (
            <NavLink
              to={`/shop/${link}`}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "btn  btn-neutral capitalize"
                  : " btn btn-outline capitalize"
              }
              onClick={() => getCategory(link)}
            >
              {link}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterProduct;
