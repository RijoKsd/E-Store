import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { cart, totalAmount, totalQuantity } = useSelector(
    (store) => store.cart
  );
  const navigate = useNavigate();

  const fakeProcessPayment =  () => {
    if(!cart.length) {
      toast.error("Cart is empty");
      return;
    }
    setIsClicked(true);
   
    setTimeout(() => {
      // setIsClicked(false);
      navigate("payment");
    }, 1000);
     
  };

  return (
    <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0  ">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="  font-bold text-3xl leading-10 ">
                Shopping Cart
              </h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8">Product Details</p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="font-normal text-lg leading-8 text-center">
                      Quantity
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-normal text-lg leading-8  text-center">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {!cart.length ? (
              <div className="flex justify-center items-center h-96">
                <p className="font-semibold text-2xl">Cart is empty</p>
              </div>
            ) : (
              cart.map((item) => <CartProduct key={item.id} item={item} />)
            )}
          </div>

          {/* checkout section */}
          <div className=" col-span-12 xl:col-span-4  w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 className="font-manrope font-bold text-3xl leading-10  pb-8 border-b border-gray-300">
              Order Summary
            </h2>
            <div>
              <div className="flex items-center justify-between md:py-8">
                <p className="font-medium text-xl leading-8">
                  {totalQuantity} Items
                </p>
                <p className="font-semibold text-xl leading-8 text-indigo-600">
                  ${totalAmount.toFixed(2)}
                </p>
              </div>
              <button
                className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700"
                onClick={fakeProcessPayment}
              >
                {isClicked ? "Processing..." : "  Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
