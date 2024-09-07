import logo from "../assets/assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import{FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <ul className="flex space-x-8 text-xl">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/manish-reddy-9901271ab/" target="Manish Reddy" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/manishreddy555" target="manishreddy555" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/122_manish" target="manishreddy" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/_manishreddy_/" target="_manishreddy_" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
