import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiSpringboot, SiCsharp, SiMongodb, SiKubernetes, SiBitbucket, SiDatadog, SiApachekafka } from "react-icons/si";
import { FaJava, FaDocker, FaAws, FaGitAlt, FaNodeJs, FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants = (duration, delay = 0) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay
    }
  }
})

const Skills = () => {
  return (
    <section id="skills" className="border-b border-neutral-900 pb-12">
      <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{opacity:1, y:0}} 
        initial={{opacity:0, y:100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Skills</motion.h1>
        <motion.div whileInView={{opacity:1, x:0}}
        initial={{opacity: 0 , x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            variants={iconVariants(2.5, 0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl" style={{ color: "#61DBFB" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(5, 0.1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaJava className="text-7xl" style={{ color: "#007396" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(6, 0.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <IoLogoJavascript className="text-7xl" style={{ color: "#F7DF1E" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2, 0.3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiCsharp className="text-7xl" style={{ color: "#239120" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(3, 0.4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiSpringboot className="text-7xl" style={{ color: "#6DB33F" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(1.5, 0.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaNodeJs className="text-7xl" style={{ color: "#339933" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 0.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className="text-7xl" style={{ color: "#47A248" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 0.7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiTailwindCssFill className="text-7xl" style={{ color: "#38B2AC" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 0.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaAws className="text-7xl" style={{ color: "#FF9900" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 0.9)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaDocker className="text-7xl" style={{ color: "#2496ED" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiKubernetes className="text-7xl" style={{ color: "#326CE5" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 1.1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaGitAlt className="text-7xl" style={{ color: "#F05032" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 1.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoPostgresql className="text-7xl" style={{ color: "#336791" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 1.3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiBitbucket className="text-7xl" style={{ color: "#0052CC" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 1.4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaBootstrap className="text-7xl" style={{ color: "#7952B3" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiMysql className="text-7xl" style={{ color: "#4479A1" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 1.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiDatadog className="text-7xl" style={{ color: "#632CA6" }} />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5, 1.7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiApachekafka className="text-7xl" style={{ color: "#231F20" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
