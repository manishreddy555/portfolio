import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/assets/kevinRushProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Manish Reddy
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
              bg-clip-text text-4xl tracking-tight text-transparent mb-1">
              Full Stack Developer
            </span>
            <p className="pb-8 my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:p-8">
          <img 
            src={profilePic} 
            alt="Manish Profile Pic" 
            className="max-w-full max-h-80 object-cover " // Added classes
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;
