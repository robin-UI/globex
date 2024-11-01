// import React from 'react'

import { NavLink } from "react-router-dom";

// import { Link } from "react-router-dom";

// box-shadow: 0px 0px 4px 4px #5A9CFE14;


function Header() {
  return (
    <header className="pt-8 px-24 sticky">
      <div className="flex items-center justify-between px-12 py-4 bg-white rounded-xl shadow-[0px_0px_4px_4px_#5A9CFE14]">
        <div className="img-container">
          <a href="/">
            <img src="../images/mainLogo.png" alt="mainlogo" />
          </a>
        </div>
        <nav>
          <ol className="flex justify-center gap-10 text-[#353535]">
            <li>
              <NavLink className="font-bold" to="/">Home</NavLink>
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

        <buthrefn className="text-white text-sm px-11 py-2 rounded-lg gradientBackground">GET A QUOTE</buthrefn>
      </div>
    </header>
  );
}

export default Header;
