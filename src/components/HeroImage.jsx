import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import userImage from "../assets/user.png";
import AnimatedIcon from "./AnimatedIcon";
import { motion } from "framer-motion";

const HeroImage = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="mask-gradient absolute right-0 top-0 h-[550px] w-full overflow-hidden rounded-bl-full rounded-br-full border-r-[10px] border-blue-500 bg-gray-700 md:h-[600px] md:w-[450px]"
    >
      <AnimatedIcon Icon={BiLogoReact} className="left-5 top-24" />

      <AnimatedIcon Icon={BiLogoCss3} className="right-5 top-28" />

      <AnimatedIcon Icon={BiLogoJavascript} className="right-7 top-72" />

      <AnimatedIcon Icon={BiLogoTailwindCss} className="left-7 top-80" />

      <img
        src={userImage}
        alt="User Image"
        className="absolute bottom-0 left-1/2 w-[450px] -translate-x-1/2"
      />
    </motion.div>
  );
};

export default HeroImage;
