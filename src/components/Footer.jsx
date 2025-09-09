import { Typography } from "@material-tailwind/react";
import goodlifeWhite from "../assets/goodlife-white-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <div className="footer flex flex-col items-center bg-brand-secondary-dark text-white px-8 py-8 mt-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 md:text-left">
        <div className="brand flex flex-col items-center md:items-start md:w-1/4">
          <img
            src={goodlifeWhite}
            alt="Goodlife Logo"
            width="150"
            height="50"
          />
          <Typography className="text-sm">
            GOODLIFE is more than a brand. It’s a daily ritual for those who
            crave purposeful living, thoughtful design, and feel-good products
            that actually make life better.
          </Typography>
        </div>
        <div className="navigation flex flex-col">
          <Typography className="text-sm font-semibold uppercase pt-4 mb-4">
            Navigation
          </Typography>
          <Typography as="li" className="text-sm mb-2">
            <a href="#">Tentang Kami</a>
          </Typography>
          <Typography as="li" className="text-sm mb-2">
            <a href="#">Produk</a>
          </Typography>
          <Typography as="li" className="text-sm mb-2">
            <a href="#">Layanan</a>
          </Typography>
          <Typography as="li" className="text-sm mb-2">
            <a href="#">Kerjasama</a>
          </Typography>
          <Typography as="li" className="text-sm">
            <a href="#">Bantuan</a>
          </Typography>
        </div>
        <div className="cs-care flex flex-col">
          <Typography className="text-sm font-semibold uppercase pt-4 mb-4">
            Customer Care
          </Typography>
          <Typography as="li" className="text-sm mb-2">
            <a href="#">FAQ</a>
          </Typography>
          <Typography as="li" className="text-sm mb-2">
            <a href="#">Shipping Info</a>
          </Typography>
          <Typography as="li" className="text-sm">
            <a href="#">Return Policy</a>
          </Typography>
        </div>
        <div className="social-media flex flex-col items-center md:items-start">
          <Typography className="text-sm font-semibold uppercase pt-4 mb-4">
            Find Us
          </Typography>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
          </div>
        </div>
      </div>
      <Typography className="copyright text-sm mt-4">
        Copyright © 2025 GOODLIFE
      </Typography>
    </div>
  );
}
