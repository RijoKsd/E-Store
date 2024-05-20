import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearCart } from "../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PaymentForm = () => {
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsClicked(true);
    dispatch(clearCart());
    setTimeout(() => {
      setIsClicked(false);
      navigate("/cart/success");
      toast.success("Payment successful");
    }, 1000);
  };
  return (
    <div className="flex justify-center items-center min-h-svh">
      <section className=" py-8  antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl font-semibold  sm:text-2xl">
              Payment{" "}
              <span className="text-xs">
                ( This is a dummy payment form, no real payment will be
                processed)
              </span>
            </h2>

            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <form
                onSubmit={handleSubmit}
                action="#"
                className="w-full rounded-lg border border-gray-200 p-4 shadow-sm  sm:p-6 lg:max-w-xl lg:p-8"
              >
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="full_name"
                      className="mb-2 block text-sm font-medium"
                    >
                      {" "}
                      Full name (as displayed on card)*{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Any Name"
                      className="input input-bordered w-full max-w-xs"
                      required
                      id="full_name"
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="card-number-input"
                      className="mb-2 block text-sm font-medium "
                    >
                      {" "}
                      Card number*{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 "
                      className="input input-bordered w-full max-w-xs"
                      required
                      id="card-number-input"
                      inputMode="numeric"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="card-expiration-input"
                      className="mb-2 block text-sm font-medium "
                    >
                      Card expiration*{" "}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder=" MM/YY"
                        className="input input-bordered w-full max-w-xs"
                        required
                        id="card-expiration-input"
                        inputMode="numeric"
                        maxLength={5}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="cvv-input"
                      className="mb-2 flex items-center gap-1 text-sm font-medium"
                    >
                      CVV*
                    </label>
                    <input
                      type="text"
                      placeholder=" 123"
                      className="input input-bordered w-full max-w-xs"
                      required
                      id="cvv-input"
                      inputMode="numeric"
                      max={3}
                    />
                  </div>
                </div>

                <button
                  className="btn btn-info w-full mt-6"
                  disabled={isClicked}
                >
                  {isClicked ? "Processing..." : "Pay Now"}
                </button>
              </form>

              <div className="mt-6 grow sm:mt-8 lg:mt-0 rounded shadow">
                <div className="space-y-4 rounded-lg border border-gray-100 p-6  ">
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Order ID:</span> #123456
                    </p>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2  ">
                    <dt className="text-base font-bold ">Total</dt>
                    <dd className="text-base font-bold ">
                      ${totalAmount.toFixed(2)}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentForm;
