import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  const container = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="pb-12">
      <div className="pb-24">
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-3xl md:text-4xl font-bold text-neutral-100"
        >
          Education
        </motion.h1>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center space-y-8"
        >
          {EDUCATION.map((education, index) => (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              key={index}
              variants={item}
              className="w-full max-w-2xl p-0"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-200">{education.degree}</h2>
              <p className="text-lg text-neutral-500">{education.year}</p>
              <p className="text-lg text-neutral-500">{education.university}</p>
              <p className="mt-2 text-sm text-neutral-400">
                <strong>CGPA:</strong> {education.CGPA}
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                <strong>Coursework:</strong> {education.Course_work}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
