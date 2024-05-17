import { useParams } from "react-router-dom";
import usePopupContext from "../context/usePopupContext";
import Star from "./Star";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Popup = () => {
  const { products, loading } = useSelector((store) => store.allProducts);
  const { id: productId } = useParams();
  const { setIsPopupOpen } = usePopupContext();

  if (loading) {
    return <Loader />;
  }
  /* The line is to find a specific product object from the `products` array based on the `id` property matching the `productId` extracted from the URL parameters using `useParams()`. */
  const product = products.find((product) => product.id === Number(productId));

  return (
    <div className=" mx-auto sm:w-full bg-slate-300   max-sm:p-4   ">
      {/* <div className="fixed -z-10 inset-0 bg-gray-500 bg-opacity-75 transition-opacity blur-3xl"></div> */}
      <div className=" flex justify-center items-center w-full h-svh animate-horizontal-bounce ">
        <div className="card lg:card-side bg-base-100 md:p-8 shadow-xl md:w-[800px] ">
          <button
            onClick={() => setIsPopupOpen(false)}
            className="btn btn-neutral btn-outline absolute right-1 top-3"
          >
            Close
          </button>

          <div className="md:w-1/3  flex justify-center items-center p-2 ">
            <img
              src={product.image}
              alt="Album"
              className=" w-full h-64 object-contain "
            />
          </div>
          <div className="card-body md:w-1/2  font-montserrat">
            <div className="flex justify-between gap-2">
              <h2 className="font-bold  md:text-xl">{product.title}</h2>
              <p className="font-bold text-3xl">${product.price}</p>
            </div>
            <div className="rating">
              {/* <span>{data.rating.rate}</span> */}
              <Star stars={product.rating.rate} />

              <span> &nbsp; {product.rating.count} reviews</span>
            </div>
            {/* reduce hight of this div */}
            <div>
              <p className="font-semibold mb-2 text-lg">Description</p>
              <p className="h-28 overflow-y-auto scroll-m-4 text-sm md:text-base">
                {" "}
                {product.description}
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <button className="btn btn-info w-full">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
