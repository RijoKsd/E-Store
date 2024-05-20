import { useParams } from "react-router-dom";
import usePopupContext from "../context/usePopupContext";
import Star from "./Star";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { addToCart } from "../redux/cart/cartSlice";

const Popup = () => {
  const { products, loading } = useSelector((store) => store.allProducts);
  const { cart } = useSelector((store) => store.cart);
  const { id: productId } = useParams();
  const { setIsPopupOpen } = usePopupContext();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === Number(productId));

  const handleAddToCart = () => {
    if (!product) return;

    const existingProduct = cart.find(
      (product) => product.id === Number(productId)
    );
    if (existingProduct) {
      toast.error("Product already in cart");
      return;
    }
    dispatch(addToCart({ ...product, quantity: 1, totalPrice: product.price }));
    toast.success("Product added to cart");
    setIsPopupOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <div className="mx-auto sm:w-full max-sm:p-4">
        <div className="flex justify-center items-center w-full h-screen animate-horizontal-bounce">
          <div className="card lg:card-side bg-base-100 p-4 md:p-8 shadow-xl max-sm:w-screen md:w-[800px] border border-dark  flex items-center justify-between">
            <div className="flex justify-between gap-2">
              <h2 className="font-bold text-base md:text-xl">
                Product not found
              </h2>
            </div>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="btn btn-neutral border shadow shadow-whit"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto sm:w-full max-sm:p-4">
      <div className="flex justify-center items-center w-full h-screen animate-horizontal-bounce">
        <div className="card lg:card-side bg-base-100 md:p-8 shadow-xl md:w-[800px] border border-dark relative">
          <button
            onClick={() => setIsPopupOpen(false)}
            className="btn btn-neutral border shadow shadow-white absolute right-1 top-3"
          >
            Close
          </button>

          <div className="md:w-1/3 flex justify-center items-center p-2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain"
            />
          </div>
          <div className="card-body md:w-2/3 font-montserrat">
            <div className="flex justify-between gap-2">
              <h2 className="font-bold text-base md:text-xl">
                {product.title}
              </h2>
              <p className="font-bold text-2xl md:text-3xl">${product.price}</p>
            </div>
            <div className="rating">
              <Star stars={product.rating.rate} />
              <span>&nbsp; {product.rating.count} reviews</span>
            </div>
            <div>
              <p className="font-semibold mb-2 text-lg">Description</p>
              <p className="h-28 overflow-y-auto scroll-m-4 text-sm md:text-base">
                {product.description}
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <button className="btn btn-info w-full" onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
