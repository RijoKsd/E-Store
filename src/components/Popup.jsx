import Star from "./Star";

const Popup = () => {
  const data = {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  };
  return (
    <div className=" mx-auto sm:w-full bg-slate-300   max-sm:p-4   ">
      {/* <div className="fixed -z-10 inset-0 bg-gray-500 bg-opacity-75 transition-opacity blur-3xl"></div> */}
      <div className=" flex justify-center items-center w-full h-svh animate-horizontal-bounce ">
        <div className="card lg:card-side bg-base-100 md:p-8 shadow-xl md:w-[800px] ">
          <button className="btn btn-neutral btn-outline absolute right-1 top-3">
            Close
          </button>

          <div className="md:w-1/3  flex justify-center items-center p-2 ">
            <img
              src={data.image}
              alt="Album"
              className=" w-full h-64 object-contain "
            />
          </div>
          <div className="card-body md:w-1/2  font-montserrat">
            <div className="flex justify-between">
              <h2 className="font-bold  md:text-xl">{data.title}</h2>
              <p className="font-bold text-3xl">${data.price}</p>
            </div>
            <div className="rating">
              {/* <span>{data.rating.rate}</span> */}
              <Star stars={data.rating.rate} />

              <span> &nbsp; {data.rating.count} reviews</span>
            </div>
            {/* reduce hight of this div */}
            <div>
              <p className="font-semibold mb-2">Description</p>
              <p className="h-28 overflow-y-auto scroll-m-4 text-sm text-gray-600">
                {" "}
                {data.description}
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
