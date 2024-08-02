import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import cn from "../../utils/projectcn";

const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--neutral-900)",
    "var(--slate-900)",
    "var(--gray-700)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const topToBottomVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto overflow-x-hidden flex justify-center relative space-x-10 lg:space-x-40 rounded-md p-5 lg:p-10"
      ref={ref}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      initial="hidden"
      whileInView="visible"
      variants={topToBottomVariants}
      viewport={{ once: false }}
    >
      <div className="relative flex flex-col lg:flex-row items-start px-4 w-full max-w-2xl">
        <div className="w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10 lg:my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl lg:text-2xl font-bold text-slate-100 sm:text-2xl md:text-3xl mx-4 md:text-left sm:mx-[6rem] py-6 md:py-10 text-center sm:text-left"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm lg:text-base text-slate-300 mt-5 lg:mt-10 sm:text-base mb-4 text-start md:text-base"
              >
                {item.description}
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm lg:text-base text-slate-300 mt-5 lg:mt-10 sm:text-base mb-4 text-start md:text-base"
              >
                <button
                  className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
                  onClick={() => window.open(item.githubLink, "_blank")}
                >
                  View Code
                </button>
              </motion.div>
              <div className="block lg:hidden mt-5">{item.content ?? null}</div>
            </div>
          ))}
          <div className="h-20 lg:h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-80 w-full lg:w-90 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};

export default StickyScroll;
