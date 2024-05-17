import { useEffect } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/api/allProductSlice";
import Loader from "../../components/Loader";
import { useOutletContext } from "react-router-dom";

const AllProduct = () => {
  const category = useOutletContext();
  console.log(category, "category");
  const data = useSelector((store) => store.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const filteredData =
    category === "all"
      ? data
      : data.filter((item) => item.category === category);
  return (
    <>
      {filteredData && filteredData.length > 0 ? (
        <div className=" mt-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
          {filteredData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AllProduct;
