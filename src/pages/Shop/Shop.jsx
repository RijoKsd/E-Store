import { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import usePopupContext from "../../context/usePopupContext";
import Popup from "../../components/Popup";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/api/allProductSlice";
import ShowProducts from "./ShowProducts";
const Shop = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { isPopupOpen } = usePopupContext();
  const [category, setCategory] = useState("all");
  const getCategory = (category) => {
    setCategory(category);
  };
  if (isPopupOpen) {
    return <Popup />;
  }

  return (
    <section className=" px-2 pt-5 md:pt-16 md:px-12  min-h-svh font-montserrat">
      <div>
        <FilterProduct getCategory={getCategory} />
        <ShowProducts category={category} />
      </div>
    </section>
  );
};

export default Shop;
