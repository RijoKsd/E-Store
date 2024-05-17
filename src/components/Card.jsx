import { Link } from "react-router-dom";
import usePopupContext from "../context/usePopupContext";

const Card = ({ item }) => {
  const { id, title, category, price, image } = item;

  
  //   popup state from context
  const { setIsPopupOpen } = usePopupContext();

  const handleClick = () => {
    setIsPopupOpen(true);
  };
  return (
    <Link
      to={`/shop/${id}`}
    
      onClick={handleClick}
      className="card bg-base-100  shadow-xl border border-dark  p-7 animate-bounce-fade-in"
    >
      <div className="object-cover h-[150px] ">
        <img
          src={image}
          alt="Shoes"
          className=" object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl "
        />
      </div>

      <div className=" card-body  ">
        <p className="text-xs text-slate-400">{category} </p>
        <h2 className="card-title text-sm">{title}</h2>
        <p className="font-extrabold text-2xl">$ {price}</p>
      </div>
    </Link>
  );
};

export default Card;
