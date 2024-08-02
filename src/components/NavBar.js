import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import Rklogo from "../Images/Rk-Logo.png";

function NavBar() {
  const [nav, setNav] = useState(false);

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.error(`Element with ID ${target} not found.`);
    }
  };

  const navSection = [
    "home",
    "about",
    "experience",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <div className="w-full fixed top-0 z-50 bg-transparent">
      <div className="flex justify-between items-center w-full h-[80px] px-4">
        <div>
          {/* <img className="w-[30%] m-auto pt-10" src={Rklogo} alt="Logo" /> */}
        </div>

        <ul className="hidden md:flex">
          {navSection.map((id) => (
            <li
              key={id}
              className="px-4 md:px-4 lg:px-8 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-[#d90a2c] duration-200"
              onClick={() => smoothScroll(`#${id}`)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul
            className="flex flex-col justify-center items-center
              absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800
              text-white md:hidden"
          >
            {navSection.map((id) => (
              <li
                key={id}
                className="text-4xl cursor-pointer px-4 py-8"
                onClick={() => {
                  setNav(false);
                  smoothScroll(`#${id}`);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
