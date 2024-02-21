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
    <header class="l-header">
      {/* <!--===== HEADER =====--> */}
      <nav class="nav bd-grid">
        <div>
          <Link class="nav__logo" to={"/"}>
            Portfolio
          </Link>
        </div>

        <div class="nav__menu " id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <Link to={"/"} class={` nav__link`} onClick={linkAction}>
                Home
              </Link>
            </li>
            <li class="nav__item">
              <Link to={"/About"} class={` nav__link`} onClick={linkAction}>
                About
              </Link>
            </li>
            <li class="nav__item">
              <Link to={"/Skills"} class={` nav__link`} onClick={linkAction}>
                Skills
              </Link>
            </li>
            <li class="nav__item">
              <Link to={"/Work"} class={` nav__link`} onClick={linkAction}>
                Work
              </Link>
            </li>
            <li class="nav__item">
              <Link to={"/Contact"} class={` nav__link`} onClick={linkAction}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div class="nav__toggle" id="nav-toggle" onClick={linkAction}>
          <i class="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
