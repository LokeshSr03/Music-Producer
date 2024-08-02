import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Assistant music director",
    company: "Elixir Studio,",
    description:
      "As an Assistant to the Music Director at Elixir Studio from December 17, 2021, to May 31, 2024, I had the invaluable opportunity to immerse myself deeply in the world of music production and composition. Throughout my tenure, I played a crucial role in various projects, supporting the music director in planning, organizing, and executing music production tasks. My responsibilities included collaborating on creative ideas during brainstorming sessions, assisting with sound engineering, mixing, and mastering, and using industry-standard software such as Pro Tools, Logic Pro, and Ableton Live. ",
    duration: "17 December 2021 - 31 May 2024 ",
  },
  {
    role: "Collaborative Experience with a Music Director",
    company: " ",
    description:
      "Working closely with the music director on various projects has been an enriching and transformative experience, providing me with hands-on exposure to both music production and composition. I assisted in planning and executing music projects, contributing creative ideas during brainstorming sessions, and enhancing the overall quality of the projects. My involvement in the technical aspects of music production, such as sound engineering, mixing, and mastering, allowed me to use industry-standard software like Pro Tools, Logic Pro, and Ableton Live. ",
    duration: " ",
  },
  {
    description:
      "Worked closely with the music director on various projects, gaining hands-on experience in music production and compostion.",
  },
  {
    description:
      "Worked closely with the music director on various projects, gaining hands-on experience in music production and compostion.",
  },
];

const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const topToBottomVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

const Experience = () => {
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
          Experience
        </h1>
        <p className="py-4 md:py-6 text-gray-300">Professional Experience</p>
      </motion.div>
      {/* <h2 className="text-lg md:text-xl font-semibold mb-2 text-white text-center sm:text-left">
        Assistant music director
      </h2>
      <h3 className="text-base md:text-lg  text-cyan-400 text-center sm:text-left">
        Elixir Studio
      </h3>
      <p className="text-gray-500 mb-3 text-sm md:text-base">
        17 December 2021 - 31 May 2024
      </p> */}

      <div className="w-full max-w-screen-xl mx-auto grid gap-4 md:gap-8  grid-cols-1 md:grid-cols-2">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-4 md:p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-500 hover:shadow-lg bg-gradient-to-r from-[#A40700] to-orange-800"
            initial="hidden"
            whileInView="visible"
            variants={topToBottomVariants}
            viewport={{ once: false }}
          >
            {experience.role && (
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-white text-center sm:text-left">
                {experience.role}
              </h2>
            )}
            {experience.company && (
              <h3 className="text-base md:text-lg  text-center sm:text-left">
                {experience.company}
              </h3>
            )}
            {experience.duration && (
              <p className="text-gray-500 mb-3 text-sm md:text-base">
                {experience.duration}
              </p>
            )}
            <p className="mb-4 text-gray-300 text-sm text-start md:text-base">
              {experience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
