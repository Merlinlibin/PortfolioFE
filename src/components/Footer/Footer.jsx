import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer z-20">
      {/* <!--===== FOOTER =====--> */}
      <div className="" id="">
        <ul className="flex items-center justify-center mb-4">
          <li className="mx-4">
            <Link to={"/"} className="text-whit">
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link to={"/About"} className="text-whit">
              About
            </Link>
          </li>
          <li className="mx-4">
            <Link to={"/Contact"} className="text-whit">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__social flex justify-center items-center">
        <a
          href="https://www.facebook.com/merlin.libin.1"
          className="footer__icon"
          target="_blank">
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/merlinlibin/"
          className="footer__icon"
          target="_blank">
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/merlinlibinmer1"
          className="footer__icon "
          target="_blank">
          <FaXTwitter />
        </a>
      </div>
      <p className="footer__copy">&#169; 2024. All rigths reserved</p>
    </footer>
  );
}

export default Footer;
