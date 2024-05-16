import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo animate-slide-out-right ">
      <Link to='/' className="font-bold font-montserrat text-3xl ">
        {" "}
        E-Store
      </Link>
    </div>
  );
};

export default Logo;
