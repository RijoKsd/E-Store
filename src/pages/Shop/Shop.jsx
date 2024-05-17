import { Outlet } from "react-router-dom";
import FilterProduct from "./FilterProduct";
import { useState } from "react";

const Shop = () => {
  const [category, setCategory] = useState("all");
  const getCategory = (category) => {
    setCategory(category);
  };

  return (
    <section className=" px-2 pt-5 md:pt-16 md:px-12  min-h-svh font-montserrat">
      <div>
        <FilterProduct getCategory={getCategory} />
        <Outlet  context={category} />
      </div>
    </section>
  );
};

export default Shop;
