import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  Menu,
  MenuList,
  MenuHandler,
  MenuItem,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { slugify } from "../utils/utils";

const NavListMenu = ({ products, handleLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            className="lg:hover:text-brand-primary-dark lg:hover:underline lg:hover:underline-offset-8"
          >
            <ListItem
              className="flex items-center gap-2 p-0 text-black lg:hover:text-brand-primary-dark bg-transparent hover:bg-transparent active:bg-red-50 focus:bg-transparent"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Product
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          {products?.map((item, id) => (
            <Link key={id} to={`${slugify(item.title)}`} state={item} className="outline-none">
              <MenuItem onClick={handleLinkClick} className="text-black text-base hover:bg-red-50 active:bg-red-50 focus:bg-red-50">
                {item.title}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
      <div className="block lg:hidden mt-2">
        <Collapse open={isMobileMenuOpen}>
          {products?.map((item, id) => (
            <Link key={id} to={`${slugify(item.title)}`} state={item} className="outline-none">
              <MenuItem onClick={handleLinkClick} className="text-black text-base hover:bg-red-50 active:bg-red-50 focus:bg-red-50">
                {item.title}
              </MenuItem>
            </Link>
          ))}
        </Collapse>
      </div>
    </>
  );
};

const NavList = ({ menu, products, handleLinkClick }) => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menu?.map((item, index) => (
        <Typography as="li" color="black" className="p-1" key={index}>
          {item.menu.includes("Product") ? (
            <NavListMenu products={products} handleLinkClick={handleLinkClick} />
          ) : (
            <NavLink
              to={item.path}
              onClick={handleLinkClick}
              className="flex items-center lg:hover:text-brand-primary-dark lg:hover:underline lg:hover:underline-offset-8 transition-colors"
            >
              {item.menu}
            </NavLink>
          )}
        </Typography>
      ))}
    </ul>
  );
};

export function NavBar({ menu, logo, products }) {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = () => {
    setOpenNav(false); // close the nav after clicking a menu item
  };

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    // Detect scroll to change background color
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`mx-auto sticky top-0 z-10 h-max max-w-full rounded-none px-6 py-3 shadow-none overflow-scroll transition-all duration-300 ${isScrolled ? "bg-red-50 border-red-50" : "bg-transparent border-transparent"}`}
    >
      <div className="flex flex-row items-center justify-between text-black lg:flex-col">
        <Link to="/">
          <img src={logo} alt="Goodlife Logo" width="153" height="51" />
        </Link>
        <div className="hidden lg:block">
          <NavList
            menu={menu}
            products={products}
            handleLinkClick={handleLinkClick}
          />
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
        <NavList
          menu={menu}
          products={products}
          handleLinkClick={handleLinkClick}
        />
      </Collapse>
    </Navbar>
  );
}
