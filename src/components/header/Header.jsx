// import React from 'react'

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FormModal from "../utils/FormModal";

// import { Link } from "react-router-dom";

// box-shadow: 0px 0px 4px 4px #5A9CFE14;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleMenu = () => {
  // };

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
    <>
      <header className="lg:pt-7 lg:px-24 top-0 fixed z-50 w-full">
        <div className="px-6 lg:px-12 py-3 bg-white lg:rounded-xl shadow-[0px_0px_4px_4px_#5A9CFE14] lg:min-w-[1119px] lg:max-w-[1440px] mx-auto ">
          <div className="flex items-center justify-between md:gap-7 lg:gap-12 ">
            <div className="img-container">
              <a href="/">
                <img
                  style={{ width: "120px", height: "auto" }}
                  src="../images/mainLogo.png"
                  alt="mainlogo"
                />
              </a>
            </div>
            <nav className="hidden lg:block">
              <ol className="flex justify-center gap-10 text-[#353535]">
                {/* <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "font-normal"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "font-normal"
                    }
                    to="our-company"
                  >
                    Business Setup
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "font-normal"
                    }
                    to="freezone"
                  >
                    Freezone
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "font-normal"
                    }
                    to="offscore"
                  >
                    Offshsore
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "font-normal"
                    }
                    to="mainland"
                  >
                    Mainland
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "font-normal"
                    }
                    to="our-team"
                  >
                    Our Team
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "font-normal"
                    }
                    to="year-uae-visa"
                  >
                    10 Year UAE Visa
                  </NavLink>
                </li>
                <li>
                  <div className="relative group">
                    <NavLink
                      className={({ isActive }) =>
                        `${
                          isActive ? "font-bold" : "font-normal"
                        } flex items-center gap-1`
                      }
                      to="/about"
                    >
                      About Us
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </NavLink>
                    <div
                      className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg py-2 mt-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] before:content-[''] before:absolute before:top-[-20px] before:left-0 before:right-0 before:h-[20px] before:bg-transparent"
                      style={{ transitionDelay: "200ms" }}
                    >
                      <NavLink
                        to="/media"
                        className={({ isActive }) =>
                          `${
                            isActive ? "font-bold" : "font-normal"
                          } block px-4 py-2 hover:bg-gray-100`
                        }
                      >
                        Media
                      </NavLink>
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          `${
                            isActive ? "font-bold" : "font-normal"
                          } block px-4 py-2 hover:bg-gray-100`
                        }
                      >
                        Blogs
                      </NavLink>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          `${
                            isActive ? "font-bold" : "font-normal"
                          } block px-4 py-2 hover:bg-gray-100`
                        }
                      >
                        Contact Us
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive ? "font-bold" : "font-normal"
                          } block px-4 py-2 hover:bg-gray-100`
                        }
                        to="our-team"
                      >
                        Our Team
                      </NavLink>
                      {/* <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive ? "font-bold" : "font-normal"
                          } block px-4 py-2 hover:bg-gray-100`
                        }
                        to="year-uae-visa"
                      >
                        10 Year UAE Visa
                      </NavLink> */}
                      <NavLink
                        to="/services"
                        className={({ isActive }) =>
                          `${isActive ? "font-bold" : "font-normal"} block px-4 py-2 hover:bg-gray-100`
                        }
                      >
                        Our Services
                      </NavLink>
                    </div>
                  </div>
                </li>
              </ol>
            </nav>

            <button
              onClick={() => setOpen(true)}
              className="hidden lg:block text-white text-sm px-11 py-2 rounded-lg gradientBackground"
            >
              GET A QUOTE
            </button>

            <div
              className={`menu-btn-1 ${isMenuOpen ? "active" : ""} lg:hidden`}
              onClick={toggleNav}
            >
              <span></span>
            </div>
          </div>
          <nav className={`top-bar__nav ${isOpen ? "expanded" : "collapsed"}`}>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "font-normal"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "font-normal"
                  }
                  to="our-company"
                >
                  Our Company
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "font-normal"
                  }
                  to="services"
                >
                  Services
                </NavLink>
              </li>
              {/* <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
                to="our-team"
              >
                Company Setup
              </NavLink>
            </li> */}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "font-normal"
                  }
                  to="year-uae-visa"
                >
                  10 Year UAE Visa
                </NavLink>
              </li>
              <li>
                <div className="relative group">
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "font-bold" : "font-normal"
                      } flex items-center gap-1`
                    }
                    to="/about"
                  >
                    About Us
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </NavLink>
                  <div
                    className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg py-2 mt-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] before:content-[''] before:absolute before:top-[-20px] before:left-0 before:right-0 before:h-[20px] before:bg-transparent"
                    style={{ transitionDelay: "200ms" }}
                  >
                    <NavLink
                      to="/media"
                      className={({ isActive }) =>
                        `${
                          isActive ? "font-bold" : "font-normal"
                        } block px-4 py-2 hover:bg-gray-100`
                      }
                    >
                      Media
                    </NavLink>
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) =>
                        `${
                          isActive ? "font-bold" : "font-normal"
                        } block px-4 py-2 hover:bg-gray-100`
                      }
                    >
                      Blogs
                    </NavLink>
                    <NavLink
                      to="/contact-us"
                      className={({ isActive }) =>
                        `${
                          isActive ? "font-bold" : "font-normal"
                        } block px-4 py-2 hover:bg-gray-100`
                      }
                    >
                      Contact Us
                    </NavLink>
                    <NavLink
                      to="/our-services"
                      className={({ isActive }) =>
                        `${
                          isActive ? "font-bold" : "font-normal"
                        } block px-4 py-2 hover:bg-gray-100`
                      }
                    >
                      Our Services
                    </NavLink>
                  </div>
                </div>
              </li>
            </ul>
            {/* <div className="flex"> */}
            <button
              onClick={() => setOpen(true)}
              className=" mx-auto w-full text-white text-sm px-11 py-2 rounded-lg gradientBackground"
            >
              GET A QUOTE
            </button>
            {/* </div> */}
          </nav>
        </div>
        {/* <div className="top-bar">
        <button
          className={`top-bar__nav-toggle hamburger ${isOpen ? "closed" : ""}`}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div> */}
      </header>
      <FormModal open={open} handleOpen={handleOpen} />
    </>
  );
}

export default Header;

//  \___________________/
//  __/__/_________\__\__
//  /⭕⭕\________/⭕⭕\
//  |_______🄶🅃🅁______ |
// \●●___||___||___||__●●/
