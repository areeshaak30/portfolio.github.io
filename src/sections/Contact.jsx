import React, { useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import ContactImage from "../assets/contact.svg";
import { contactDetails } from "../constants";
import ContactDetailCard from "../components/ContactDetailCard";
import { motion, stagger, useInView } from "framer-motion";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  const fadeInVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="px-4 py-16 lg:py-20"
      id="contact"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <SectionTitle title="Contact Me" />
      <div className="container mt-10 flex flex-col gap-10 rounded-2xl border-2 border-white/10 bg-white/5 p-10 md:flex-row">
        <motion.div
          className="flex flex-1 items-center justify-center"
          variants={fadeInVariants}
        >
          <img src={ContactImage} alt="Contact Image" className="h-40" />
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col gap-5"
          variants={fadeInVariants}
        >
          <h1 className="font-serif text-3xl font-bold text-white/70">
            Get in Touch
          </h1>
          <p className="text-white/60">
            Have a question or want to work together? Feel free to reach me out
            via the options below. I'll get back to you as soon as possible.
          </p>
          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer}
          >
            {contactDetails.map((contact) => (
              <motion.div variants={fadeInVariants}>
                <ContactDetailCard contact={contact} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
