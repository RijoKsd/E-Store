import Logo from "../pages/Logo";
import Nav from "../pages/Nav";
import ThemeAndCartIcon from "../pages/ThemeAndCartIcon";

const Header = () => {
  return (
    // <header className="  sticky flex-wrap top-0 z-10 mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
  
    <header className="flex  shadow  items-center px-2  md:px-12 p-3 justify-between">
      <Nav />
      <Logo />
      <ThemeAndCartIcon />
    </header>
  );
};

export default Header;
