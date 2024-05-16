import { useState } from "react";
import { Icons } from "../constants/icons";
 
const NavLinks = () => {
  return (
    <>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
    </>
  );
};

const Nav = () => {
      const [isOpen, setIsOpen] = useState(false);
      const toggleNavbar = () => setIsOpen(!isOpen);
      const { Bars3, XMark } = Icons;

 
 

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className=" hidden justify-between w-full md:flex">
          <NavLinks />
        </div>
        <div>
          <button onClick={toggleNavbar} className="w-9 h-9 md:hidden">
            {isOpen ? <XMark /> : <Bars3 />}
          </button>
        </div>
      </nav>

      {
        isOpen && (
            <div className=" flex flex-col items-center basis-full ">
                <NavLinks />
            </div>
        )
      }
    </>
  );
};

export default Nav;
