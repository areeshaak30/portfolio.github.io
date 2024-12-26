import React, { useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import userImage from "../assets/file.png";
import Button from "../components/Button";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="py-16"
      id="about"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <SectionTitle title="About me" />
      <div className="mt-8 flex flex-col items-center gap-10 md:mt-16 md:flex-row md:gap-3">
        {/* ABOUT IMAGE */}
        <motion.img
          src={userImage}
          alt="About User"
          className="w-full flex md:w-1/2 rounded-lg pl-20"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        {/* ABOUT CONTENT */}
        <motion.div
          className="container flex-1 flex flex-col justify-center items-center text-center md:items-start md:text-left mt-12"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="max-w-lg">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white/80">
              Hi, I'm <span className="text-blue-500">Areesha Khan</span>
            </h1>
            <p className="mt-3 text-sm text-white/60 md:text-base">
              I am a Computer Science prodigy and a creative Front-End
              Developer,passionate about transforming innovative ideas into
              engaging digital experiences. My journey in tech has been driven
              by curiosity and a strong commitment to excellence.
            </p>
          </div>
          <div>
            <Button className="mt-5">Hire Me!</Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
