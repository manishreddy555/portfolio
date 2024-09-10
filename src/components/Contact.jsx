import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import {motion} from "framer-motion";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "fef10d5e-dfc7-4e09-b3d6-666d625ac443");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset(); 
    } else {
      console.log("Error", res);
    }
  };

  return (
    <section id="contact" className="border-b border-neutral-900 pb-12">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h1 whileInView={{opacity:1 ,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:0.5}}className="my-10 text-center text-4xl">Get In Touch</motion.h1>
        <div className="flex flex-wrap lg:flex-nowrap justify-center">

          <motion.div whileInView={{opacity:1 ,x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:1}}
          className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:mr-10">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Let's Talk
            </h2>
            <p className="text-lg">You can reach me out at:</p>
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-2xl mr-4 text-blue-500" />
                <p className="text-neutral-300">manishreddy0318@gmail.com</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-2xl mr-4 text-blue-500" />
                <p className="text-neutral-300"> +1 (513) 918-1356</p>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-2xl mr-4 text-green-500" />
                <p className="text-neutral-300"> Cincinnati, OH, USA</p>
              </div>
            </div>
          </motion.div>

       
          <motion.div whileInView={{opacity:1 ,x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:1}}
          className="w-full lg:w-1/2">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border-b border-neutral-400 bg-transparent py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border-b border-neutral-400 bg-transparent py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Write Your Message Here"
                  className="w-full border-b border-neutral-400 bg-transparent py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
