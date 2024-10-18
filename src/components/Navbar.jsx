import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">IlhamY</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-cyan-300">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-300">
            About Me
          </a>
          <a href="#service" className="hover:text-cyan-300">
            Services
          </a>
          <a href="#projects" className="hover:text-cyan-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-300">
            Contact
          </a>
        </div>
        <button className="bg-gradient-to-r from-green-300 to-cyan-300 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 py-2 px-4 rounded-full">
          <a href="https://linkedin.com/in/ilhamyudiatmoko">Connect</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
