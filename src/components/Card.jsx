const Card = ({ item }) => {
   const { title, category, price, image } = item;
  return (
    <div className=" card bg-base-100  shadow-xl border border-dark  p-7 animate-bounce-fade-in">
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
    </div>
  );
};

export default Card;
