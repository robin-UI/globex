// import React from 'react'

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
              <a className="font-bold" href="/">Home</a>
            </li>
            <li>
              <a href="our-company">Our Company</a>
            </li>
            <li>
              <a href="Services">Services</a>
            </li>
            <li>
              <a href="Company-setup">Company Setup</a>
            </li>
            <li>
              <a href="10-year-uae-visa">10 Year UAE Visa</a>
            </li>
            <li>
              <a href="Media">Media</a>
            </li>
          </ol>
        </nav>

        <buthrefn className="text-white text-sm px-11 py-2 rounded-lg gradientBackground">GET A QUOTE</buthrefn>
      </div>
    </header>
  );
}

export default Header;
