import { Icons } from "../constants/icons";

const Cart = () => {
  const data = {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  };
  return (
    <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                Shopping Cart
              </h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                3 Items
              </h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Product Details
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Quantity
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
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
                  className="mx-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-3">
                    <h6 className="font-semibold text-base leading-7 text-black">
                      {data.title}
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-500">
                      {data.category}
                    </h6>
                    <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $ {data.price}
                    </h6>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button className="group rounded-l-xl">
                      <Icons.Minus className=" transition-all duration-500  w-6 h-6" />
                    </button>
                    <span className="quantity">1</span>
                    <button className=" group rounded-r-xl ">
                      <Icons.Plus className=" transition-all duration-500  w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                    $ {data.price}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* checkout section */}
          <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
              Order Summary
            </h2>
            <div>
              <div className="flex items-center justify-between py-8">
                <p className="font-medium text-xl leading-8 text-black">
                  3 Items
                </p>
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
