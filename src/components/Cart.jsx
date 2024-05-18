import { Icons } from "../constants/icons";

const Cart = () => {
  const data = {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
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

            {/* product contianer */}
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group relative ">
              <button className="btn btn-circle absolute top-2 right-2">
                <Icons.Trash className="w-6 h-6 transition-all duration-500 group-hover:text-indigo-600" />
              </button>
              <div className="w-full md:max-w-[126px]">
                <img
                  src={data.image}
                  alt="perfume bottle image"
                  className=" mx-auto max-sm:h-28 max-sm:object-contain "
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-3">
                    <h6 className="font-semibold text-base leading-7">
                      {data.title}
                    </h6>

                    <h6 className="font-medium text-base leading-7  transition-all duration-300 group-hover:text-indigo-600">
                      $ {data.price}
                    </h6>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button className="action-btn rounded-l-xl">
                      <Icons.Minus className=" transition-all duration-500  w-6 h-6" />
                    </button>
                    <span className="quantity">1</span>
                    <button className=" action-btn rounded-r-xl cursor-pointer ">
                      <Icons.Plus className=" transition-all duration-500  w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="flex  mt-2 items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p className="font-bold text-lg leading-8  text-center transition-all duration-300 group-hover:text-indigo-600">
                    $ {data.price}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* checkout section */}
          <div className=" col-span-12 xl:col-span-4  w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 className="font-manrope font-bold text-3xl leading-10  pb-8 border-b border-gray-300">
              Order Summary
            </h2>
            <div>
              <div className="flex items-center justify-between py-8">
                <p className="font-medium text-xl leading-8">3 Items</p>
                <p className="font-semibold text-xl leading-8 text-indigo-600">
                  $485.00
                </p>
              </div>
              <button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
