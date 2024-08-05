import React from "react";
import { motion } from "framer-motion";
import imageUrl from "../Images/achieveimg.jpg";

function Achievements() {
  const achievements = [
    "Certified Full Stack Developer by RST FORUM",
    "Completed portfolio project with React.js, TailwindCSS, and Vite",
    "Developed an Android app for Deaf and Mute communication",
    "Built a FastAPI Twitter-like API",
    "Created fs-manager-cli for file system management",
    // Add more achievements as needed
  ];

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: "easeOut" },
    },
  };

  const topToBottomVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="md:mx-[7rem] py-6 md:py-10 text-center sm:text-left"
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl font-bold border-b-4 border-[#A40700] p-2 inline">
          Achievements
        </h1>
        <p className="py-6 text-white">
          Transforming ideas into digital realities with creativity and code.
        </p>
      </motion.div>
      <div className="w-full max-w-screen-xl mx-auto bg-gradient-to-r from-[#A40700] to-orange-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center px-5 md:px-10 md:pl-20 justify-between">
          {/* Left column for image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-5 md:mb-0 md:ml-5">
            <img
              src={imageUrl}
              alt="Achievement"
              className="rounded-lg shadow-md max-h-96 object-cover"
            />
          </div>
          {/* Right column for achievements list */}
          <div className="w-full md:w-1/2 md:pr-20">
            <ul className="list-disc list-inside text-white space-y-3">
              {/* Mapping through achievements array */}
              {achievements.map((achievement, index) => (
                <li key={index} className="text-lg md:text-xl">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
