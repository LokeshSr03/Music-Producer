import React from "react";
import StickyScroll from "../components/ui/project-scroll";
import ecommerce from "../Images/e-commerce.png";
import usermanagement from "../Images/user-management.png";
import restaurant from "../Images/restautant.png";
import { motion } from "framer-motion";

const content = [
  {
    title: "E-COMMERCE WEBSITE",
    description:
      "I contributed to developing a dynamic E-commerce website focused on clothing, improving user experience with features like userfriendly product browsing, secure payment gateways, personalized user accounts. Additionally, I implemented an intuitive admin panel for streamlined management of product listings, inventory tracking, and order fulfillment. Leveraging my expertise in React.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, and Mongoose, I optimized the website's performance and enhanced its functionality. ",
    githubLink: "https://github.com/Abhisheksah09/E-Commerce-Website",
    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={ecommerce}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://github.com/Abhisheksah09/E-Commerce-Website",
                "_blank"
              )
            }
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <button
            className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              window.open(
                "https://github.com/Abhisheksah09/E-Commerce-Website",
                "_blank"
              )
            }
          >
            View Code
          </button>
        </div>
      </>
    ),
  },
  {
    title: "User Management API",
    description:
      "I have proficiently developed a robust User Management API with comprehensive Authentication and Authorization functionalities, encompassing user registration, login, user profile management, and OTP-based login. Additionally, the API includes email confirmation with OTP upon user signup. Notably, I also designed and implemented an Admin panel, restricting access to authorized personnel for viewing and updating user data. Leveraging my expertise in React.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, and Mongoose, I successfully executed this project, showcasing my adeptness in full-stack web development.",
    githubLink: "https://github.com/Abhisheksah09/User-Management-API",

    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={usermanagement}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://github.com/Abhisheksah09/User-Management-API",
                "_blank"
              )
            }
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <button
            className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              window.open(
                "https://github.com/Abhisheksah09/User-Management-API",
                "_blank"
              )
            }
          >
            View Code
          </button>
        </div>
      </>
    ),
  },
  {
    title: "RESTAURANT WEBSITE",
    description:
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
    githubLink: "https://github.com/Abhisheksah09/Restaurant-Website",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={restaurant}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://github.com/Abhisheksah09/Restaurant-Website",
                "_blank"
              )
            }
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <button
            className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              window.open(
                "https://github.com/Abhisheksah09/Restaurant-Website",
                "_blank"
              )
            }
          >
            View Code
          </button>
        </div>
      </>
    ),
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

function ProjectShow() {
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
          Projects
        </h1>
        <p className="py-6 text-white">A Showcase of My Best Work</p>
      </motion.div>

      <StickyScroll content={content} />
    </div>
  );
}

export default ProjectShow;
