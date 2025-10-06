import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavList = ({ menu, handleLinkClick }) => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menu?.map((item, index) => (
        <Typography as="li" color="black" className="p-1" key={index}>
          <NavLink
            to={item.path}
            onClick={handleLinkClick}
            className="flex items-center lg:hover:text-brand-primary-dark lg:hover:underline lg:hover:underline-offset-8 transition-colors"
          >
            {item.menu}
          </NavLink>
        </Typography>
      ))}
    </ul>
  );
};

export function NavBar({ menu, logo }) {
  const [openNav, setOpenNav] = useState(false);

  const handleLinkClick = () => {
    setOpenNav(false); // close the nav after clicking a menu item
  };

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 shadow-none">
      <div className="flex flex-row items-center justify-between text-blue-gray-900 lg:flex-col">
        <Link to="/">
          <img src={logo} alt="Goodlife Logo" width="153" height="51" />
        </Link>
        <div className="hidden lg:block">
          <NavList menu={menu} handleLinkClick={handleLinkClick} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList menu={menu} handleLinkClick={handleLinkClick} />
      </Collapse>
    </Navbar>
  );
}
