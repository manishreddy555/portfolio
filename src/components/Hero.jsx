import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/assets/manish_hero.jpg";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const Hero = () => {
  return (
    <section id="hero" className="border-b border-neutral-900 pb-12 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pr-8">
          <motion.h1
            variants={container(0.5)} 
            initial="hidden"
            animate="visible"
            className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
          >
            Manish Reddy
          </motion.h1>
          <motion.span
          variants={container(1.0)} 
          initial="hidden"
          animate="visible"
           className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
            bg-clip-text text-4xl tracking-tight text-transparent mb-4">
            Full Stack Developer
          </motion.span>
          <motion.p 
           variants={container(1.25)} 
           initial="hidden"
           animate="visible"
           className="pb-4 my-2 max-w-xl py-6 font-light tracking-tighter">
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            variants={container(1.25)} 
            initial="hidden"
            animate="visible"
            href="https://drive.google.com/file/d/1ekI3mX78fiBag_OMsQSj9-7ltaOfBNCO/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition mb-4 lg:mb-0"
          >
            <FaDownload className="mr-2" /> Download Resume
          </motion.a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8">
          <motion.img 
          initial={{x:100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:1, delay: 1.2}}
            src={profilePic} 
            alt="Manish Profile Pic" 
            className="max-w-full max-h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;