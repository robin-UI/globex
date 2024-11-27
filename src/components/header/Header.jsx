// import React from 'react'

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// import { Link } from "react-router-dom";

// box-shadow: 0px 0px 4px 4px #5A9CFE14;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // const mobileNav = document.getElementById("mobile-nav");

    // setTimeout(function () {
    //   document.getElementById("form-container").style.display = "block";
    // }, 10000);

    // function menuBtnFunction(menuBtn) {
    //   menuBtn.classList.toggle("active");
    //   mobileNav.hidden = !mobileNav.hidden;
    // }
    // menuBtnFunction();
  }, []);

  return (
    <header className="lg:pt-8 lg:px-24 top-0 fixed z-50 w-full">
      <div className="flex items-center justify-between gap-24 px-12 py-4 bg-white lg:rounded-xl shadow-[0px_0px_4px_4px_#5A9CFE14]">
        <div className="img-container">
          <a href="/">
            <img
              style={{ width: "150px", height: "auto" }}
              src="../images/mainLogo.png"
              alt="mainlogo"
            />
          </a>
        </div>
        <nav className="hidden lg:block">
          <ol className="flex justify-center gap-10 text-[#353535]">
            <li>
              <NavLink className="font-bold" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="our-company">Our Company</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="company-setup">Company Setup</NavLink>
            </li>
            <li>
              <NavLink to="year-uae-visa">10 Year UAE Visa</NavLink>
            </li>
            <li>
              <NavLink to="media">Media</NavLink>
            </li>
          </ol>
        </nav>

        <button className="hidden lg:block text-white text-sm px-11 py-2 rounded-lg gradientBackground">
          GET A QUOTE
        </button>

        <div
          className={`menu-btn-1 ${isMenuOpen ? "active" : ""} lg:hidden`}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>

      
    </header>
  );
}

export default Header;
