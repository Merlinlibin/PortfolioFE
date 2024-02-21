import React from "react";
import { Link } from "react-router-dom";

function Header() {
  /*====================  MENU MOBILE ====================*/
  const navLink = document.querySelectorAll(".nav__link");

  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    } else {
      navMenu.classList.add("show");
    }
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));

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
              <Link to={"/"} class={` nav__link`}>
                Home
              </Link>
            </li>
            <li class="nav__item">
              <Link to={"/About"} class={` nav__link`}>
                About
              </Link>
            </li>
            <li class="nav__item">
              <Link to={"/Skills"} class={` nav__link`}>
                Skills
              </Link>
            </li>
            <li class="nav__item">
              <Link to={"/Work"} class={` nav__link`}>
                Work
              </Link>
            </li>
            <li class="nav__item">
              <Link to={"/Contact"} class={` nav__link`}>
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
