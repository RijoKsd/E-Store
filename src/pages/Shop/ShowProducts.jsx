import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import usePopupContext from "../../context/usePopupContext";
import { useSelector } from "react-redux";

const ShowProducts = ({ category }) => {
   const data = useSelector((store) => store.allProducts.products);
  const { loading } = useSelector((store) => store.allProducts);

   //   popup state from context
  const { setIsPopupOpen } = usePopupContext();

  const filteredData =
    category === "all"
      ? data
      : data.filter((item) => item.category === category);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {filteredData && filteredData.length > 0 ? (
        <div className=" mt-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredData.map((item) => (
            <Link
              to={`${item.id}`}
              key={item.id}
              className="card bg-base-100 shadow-xl border border-dark p-7 animate-bounce-fade-in"
              onClick={() => setIsPopupOpen(true)}
            >
              <Card item={item} />
            </Link>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ShowProducts;
