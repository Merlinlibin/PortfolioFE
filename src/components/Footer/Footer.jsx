import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer">
      {/* <!--===== FOOTER =====--> */}
      <div class="" id="">
        <ul class="flex items-center justify-center mb-4">
          <li class="mx-4">
            <Link to={"/"} class="text-whit">
              Home
            </Link>
          </li>
          <li class="mx-4">
            <Link to={"/About"} class="text-whit">
              About
            </Link>
          </li>
          <li class="mx-4">
            <Link to={"/Contact"} class="text-whit">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div class="footer__social flex justify-center items-center">
        <a
          href="https://www.facebook.com/merlin.libin.1"
          class="footer__icon"
          target="_blank">
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/merlinlibin/"
          class="footer__icon"
          target="_blank">
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/merlinlibinmer1"
          class="footer__icon "
          target="_blank">
          <FaXTwitter />
        </a>
      </div>
      <p class="footer__copy">&#169; 2024. All rigths reserved</p>
    </footer>
  );
}

export default Footer;
