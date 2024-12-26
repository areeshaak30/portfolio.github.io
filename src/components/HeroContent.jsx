import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const HeroContent = ({ variants }) => {
  return (
    <motion.div
      variant={variants}
      className="text-left md:max-w-72 lg:max-w-lg"
    >
      <p className="text-xl font-medium text-blue-300">Areesha Khan</p>
      <h2 className="mt-4 font-serif text-3xl font-bold tracking-wide text-white/80 md:text-4xl lg:mt-8 lg:text-5xl">
        Computer Science Engineer based in Lahore
      </h2>
      <p className="mt-4 text-white/40 md:text-lg">
        I have completed a degree in computer science, gaining expertise in
        software development, programming, and problem-solving.
      </p>
      <div className="flex items-center gap-2 mt-5">
        <a href="#contact">
          <Button>Hire ME</Button>
        </a>
        <a href="/my_resume.pdf" download>
          <Button variant="outline">My Resume</Button>
        </a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
