import { Icons } from "../constants/icons"

 

const CartProduct = ( {item}) => {
    const { id, title, price, image } = item
  return (
    <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group relative ">
      <button className="btn btn-circle absolute top-2 right-2">
        <Icons.Trash className="w-6 h-6 transition-all duration-500 group-hover:text-indigo-600" />
      </button>
      <div className="w-full md:max-w-[126px]">
        <img
          src={image}
          alt="perfume bottle image"
          className=" mx-auto max-sm:h-28 max-sm:object-contain "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        <div className="md:col-span-2">
          <div className="flex flex-col max-[500px]:items-center gap-3">
            <h6 className="font-semibold text-base leading-7">{title}</h6>

            <h6 className="font-medium text-base leading-7  transition-all duration-300 group-hover:text-indigo-600">
              $ {price}
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
            $ {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct