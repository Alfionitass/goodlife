import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export function Footer({ menu, logo }) {
  return (
    <div className="footer flex flex-col items-center bg-brand-secondary-dark text-white px-8 py-8 mt-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 md:text-left">
        <div className="brand flex flex-col items-center md:items-start md:w-1/4">
          <Link to="/">
            <img src={logo} alt="Goodlife Logo" width="150" height="50" />
          </Link>
          <p className="text-sm">
            GOODLIFE is more than a brand. It’s a daily ritual for those who
            crave purposeful living, thoughtful design, and feel-good products
            that actually make life better.
          </p>
        </div>
        <div className="navigation flex flex-col">
          <p className="text-sm font-black uppercase pt-4 mb-4">Navigation</p>
          {menu?.map((item, index) => (
            <p className="text-sm mb-2" key={index}>
              <NavLink to={item.path}>{item.menu}</NavLink>
            </p>
          ))}
        </div>
        <div className="cs-care flex flex-col">
          <p className="text-sm font-black uppercase pt-4 mb-4">
            Customer Care
          </p>
          <p className="text-sm mb-2">
            <a href="#">FAQ</a>
          </p>
          <p className="text-sm mb-2">
            <a href="#">Shipping Info</a>
          </p>
          <p className="text-sm">
            <a href="#">Return Policy</a>
          </p>
        </div>
        <div className="social-media flex flex-col items-center md:items-start">
          <p className="text-sm font-black uppercase pt-4 mb-4">Find Us</p>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/ourgoodlife.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/ourgoodlife.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright text-sm mt-4">Copyright © 2025 GOODLIFE</p>
    </div>
  );
}
