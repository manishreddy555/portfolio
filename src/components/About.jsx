import aboutImg from "../assets/assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion} from "framer-motion";
const About = () => {
  return (
    <section id="about" className="border-b border-neutral-900 pb-12">
      <h1 className="my-20 text-center text-4xl font-bold">
        About 
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row">
        <motion.div
        whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration : 1}}> 
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:pr-8 mb-8 lg:mb-0">
          <img
            className="rounded-2xl shadow-lg"
            src={aboutImg}
            alt="About Me"
          />
        </div>
        </motion.div>
        
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration :1}}
        className="w-full lg:w-1/2 flex items-center">
          <p className="text-lg text-neutral-300 leading-relaxed mx-auto lg:mx-0">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
