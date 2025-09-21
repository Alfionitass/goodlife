import { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const menuList = ["Tentang Kami", "Produk", "Layanan", "Kerjasama", "Bantuan"];

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menuList.map((item, index) => (
        <Typography
          as="li"
          color="black"
          className="p-1 font-medium"
          key={index}
        >
          <a
            href="#"
            className="flex items-center lg:hover:text-brand-primary-dark lg:hover:underline lg:hover:underline-offset-8 transition-colors"
          >
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );
};

export function NavBar({ logo }) {
  const [openNav, setOpenNav] = useState(false);

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
        <img src={logo} alt="Goodlife Logo" width="153" height="51" />
        <div className="hidden lg:block">
          <NavList />
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
        <NavList />
      </Collapse>
    </Navbar>
  );
}
