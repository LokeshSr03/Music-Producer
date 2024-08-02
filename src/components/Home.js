import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import bgImage from "../Images/Rkbg-image.jpeg"; // Update this path to your background image
import leftImage from "../Images/RKhero-image.png"; // Update this path to your left-side image

const Homepage = () => {
  const handleDownload = () => {
    // Your download resume logic here
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              src={leftImage}
              alt="Left Side"
              className="max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div> */}
          <div className="md:w-1/2 text-white text-center md:text-left">
            <div className="text-4xl md:text-6xl font-medium tracking-tight text-white">
              <Typewriter
                options={{
                  strings: [
                    "Rushabh Karangutkar",
                    "Music Production",
                    "Film score composer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-justify text-base sm:text-lg lg:text-xl leading-relaxed text-white mt-[4rem] mx-auto max-w-prose">
              Versatile music creator with successful collaborations with top
              media houses like Zee, Colors, Sony, and Planet Marathi, crafting
              music that resonates with diverse audiences
            </p>

            <button
              onClick={handleDownload}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#A40700] text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none mt-3"
            >
              Download Resume
            </button>
            <div className="flex justify-center md:justify-start items-center mt-6 space-x-4">
              <a
                href="https://www.linkedin.com/in/abhishek-sah-782409265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <span class="inline-flex justify-center items-center size-[40px] rounded-lg bg-[#A40700] text-white dark:bg-red-700 hover:bg-red-700">
                  <FaLinkedinIn />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-sah-782409265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-500"
              >
                <span class="inline-flex justify-center items-center size-[40px] rounded-full bg-[#A40700] text-white dark:bg-red-700 hover:bg-red-700">
                  <MdOutlineEmail />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-sah-782409265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-500"
              >
                <span class="inline-flex justify-center items-center size-[40px] rounded-lg bg-[#A40700] text-white dark:bg-red-700 hover:bg-red-700">
                  <FaPhoneAlt />
                </span>
              </a>
              {/* <a
                href="https://github.com/Abhisheksah09/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-500"
              >
                <FaGithub  />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
