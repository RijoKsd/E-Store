import { useState } from "react";
import { Icons } from "../../constants/icons";
import { NavLink } from "react-router-dom";

const NavLinks = ({ mobile }) => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "btn btn-info  font-montserrat" : "btn font-montserrat`"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? "btn btn-info  font-montserrat" : "btn font-montserrat`"
        }
      >
        Shop
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const { Bars3, XMark } = Icons;

  return (
    <>
      <nav className="md:w-2/12 animate-slide-in-left">
        <div className=" justify-between  gap-4  max-sm:hidden md:flex">
          <NavLinks />
        </div>
        <div className="">
          <button onClick={toggleNavbar} className="w-9 h-9 md:hidden">
            {isOpen ? <XMark /> : <Bars3 />}
          </button>
        </div>
      </nav>

      {/* small device */}
      {isOpen && (
        <div
          className={`absolute pt-10 top-[11%] flex flex-col w-[80%] h-[80%] left-0 gap-2 px-10 bg-slate-800 text-white shadow-md rounded animate-shake z-50 `}
        >
          <NavLinks mobile />
        </div>
      )}
    </>
  );
};

export default Nav;
