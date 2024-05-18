import { Outlet } from "react-router-dom";
import Logo from "../pages/NavComponents/Logo";
import Nav from "../pages/NavComponents/Nav";
import ThemeAndCartIcon from "../pages/NavComponents/ThemeAndCartIcon";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  return (
    <>
        <ToastContainer position="top-left" autoClose={1000} />
      <header className="flex  shadow  items-center px-2  md:px-12 p-3 justify-between">
        <Nav />
        <Logo />
        <ThemeAndCartIcon />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
