import React from "react";
import { Link } from "react-router-dom";

function Header() {
  /*====================  MENU MOBILE ====================*/
  

  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    } else {
      navMenu.classList.add("show");
    }
  }
  

  return (
    <header className="l-header">
      {/* <!--===== HEADER =====--> */}
      <nav className="nav bd-grid">
        <div>
          <Link className="nav__logo" to={"/"}>
            Portfolio
          </Link>
        </div>

        <div className="nav__menu " id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to={"/"} className={` nav__link`} onClick={linkAction}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/About"} className={` nav__link`} onClick={linkAction}>
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={"/Skills"}
                className={` nav__link`}
                onClick={linkAction}>
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={"/Projects"}
                className={` nav__link`}
                onClick={linkAction}>
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/Work"} className={` nav__link`} onClick={linkAction}>
                Experience
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={"/Contact"}
                className={` nav__link`}
                onClick={linkAction}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={linkAction}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
