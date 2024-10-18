import React from "react";
import AboutImage from "../assets/images/iyam.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex flex-col">
            <img
              src={AboutImage}
              alt="iyamm"
              className="w-72 -h80 rounded object-cover bg-slate-300"
            />
            <div className="flex justify-between text-center mt-4 mb-4 md:mb-0">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300">
                  2+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300">
                  5
                </h3>
                <p>Project Completed</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate front-end developer with a focus on building
              modern, responsive, and multiplatform applications. With a strong
              foundation in front-end web and mobile technologies. I strive to
              create seamless and efficent user experience
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 mr-2">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-300 to-cyan-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-2/12 mr-2">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-300 to-cyan-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12 mr-2">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-300 to-cyan-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="androidkotlin" className="w-2/12 mr-2">
                  Android Native
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-300 to-cyan-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="flutter" className="w-2/12 mr-2">
                  Flutter
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-300 to-cyan-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
