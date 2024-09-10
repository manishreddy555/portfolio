import logo from "../assets/assets/manish_logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:flex-grow items-center justify-center`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-8 text-xl">
          <li className="py-2 lg:py-0">
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="#skills" className="hover:text-blue-500">
              Skills
            </a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="#experience" className="hover:text-blue-500">
              Experience
            </a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="#education" className="hover:text-blue-500">
              Education
            </a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/manish-reddy-9901271ab/"
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0077b5' }} // LinkedIn color
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/manishreddy555"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#333' }} // GitHub color
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/122_manish"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1DA1F2' }} // Twitter color
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/_manishreddy_/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#E1306C' }} // Instagram color
        >
          <FaInstagram />
        </a>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            &#9776;
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
