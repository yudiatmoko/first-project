import React from "react";
import HeroImage from "../assets/images/iyam.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-20">
      <img
        src={HeroImage}
        alt="iyam"
        className="mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-green-300 to-cyan-300"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300">
          Ilham Yudiatmoko
        </span>
        , a Front-End Developer
      </h1>
      <p className="mt-4 text-lg text-white">
        I specialize in building modern, responsive, and multiplatform
        applications.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-green-300 to-cyan-300 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 py-2 px-4 rounded-full">
          <a href="#contact">Contact Me</a>
        </button>
        <button className="bg-transparent border-2 border-cyan-300 text-cyan-300 hidden md:inline transform transition-transform duration-300 hover:scale-105 py-2 px-4 rounded-full">
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
