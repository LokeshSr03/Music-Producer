import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import image from "../Images/portfolio.png";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

function LampDemo() {
  const handleDownload = () => {
    const resumeUrl = `${process.env.PUBLIC_URL}/resume/resume.pdf`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 px-4 md:px-8 lg:px-16 text-center"
      >
        <img
          className="w-3/4 md:w-1/3 lg:w-[17%] mx-auto pb-8"
          src={image}
          alt="Logo"
        />
        <div className="text-4xl md:text-6xl font-medium tracking-tight text-gray-500">
          <Typewriter
            options={{
              strings: ["I'm Abhishek Sah", "Jr Full Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-justify text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 mt-7 mx-auto max-w-prose">
          I'm a skilled software developer proficient in JavaScript and
          specialized in frameworks such as React, Node.js, Express.js, and
          MongoDB. I excel at crafting efficient, scalable, and user-friendly
          solutions. Passionate about exploring cutting-edge technologies,
          particularly in web development, I am continuously seeking
          opportunities to expand my skills and contribute to innovative
          projects.
        </p>
        <button
          onClick={handleDownload}
          className="bg-cyan-500 hover:bg-cyan-700 text-white mt-10 py-2 px-4 text-lg md:text-xl rounded-sm"
        >
          Download Resume
        </button>
        <div className="flex justify-center items-center mt-10 space-x-4">
          <a
            href="https://www.linkedin.com/in/abhishek-sah-782409265/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-500"
          >
            <FaLinkedin className="text-3xl md:text-4xl" />
          </a>
          <a
            href="https://github.com/Abhisheksah09/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-500"
          >
            <FaGithub className="text-3xl md:text-4xl" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default LampDemo;
