import React, { useState } from "react";
import * as GiIcons from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const [fixScroll, setFixScroll] = useState(false);

  const burgerToggle = () => {
    setBurger(!burger);
  };

  const fixedScroll = () => {
    if (window.scrollY >= 20) {
      setFixScroll(true);
    } else {
      setFixScroll(false);
    }
  };

  window.addEventListener("scroll", fixedScroll);
  return (
    <div className={fixScroll ? "container-navbar" : "container-navbar-scroll"}>
      <div className="box-content">
        <div>
          <a className="nav-title" href="#">
            TechSpeed
          </a>
        </div>

        <ul className={burger ? "nav-content-phone" : "nav-content"}>
          <li>
            <Link to={"/"} className="nav-items" href="#">
              Beranda
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-items" href="#">
              About
            </Link>
          </li>
          <li>
            <Link to={"/service"} className="nav-items" href="#">
              Service
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="nav-items" href="#">
              Contact
            </Link>
          </li>
        </ul>

        <GiIcons.GiHamburgerMenu
          onClick={burgerToggle}
          color="white"
          className="btn-hamburgerMenu"
        />
      </div>
    </div>
  );
};

export default Navbar;
