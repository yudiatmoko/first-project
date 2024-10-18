import React from "react";
import GoStudyImage from "../assets/images/gostudy.png";
import CatatanKuImage from "../assets/images/catatanku.png";
import PyShopImage from "../assets/images/pyshop.png";

const projects = [
  {
    id: 1,
    name: "GoStudy MOOC App",
    technologies: "Kotlin, Firebase and Retrofit",
    image: GoStudyImage,
    github: "https://github.com/yudiatmoko/GoStudy-Group4",
  },
  {
    id: 2,
    name: "CatatanKu Note App",
    technologies: "Java, Room DB, and Koin",
    image: CatatanKuImage,
    github: "https://github.com/yudiatmoko/vsga2024/tree/final-project",
  },
  {
    id: 3,
    name: "PyShop Marketplace",
    technologies: "Wordpress CMS",
    image: PyShopImage,
    github: "https://pyshop.net",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.image}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                className="inline-block bg-gradient-to-r 
              from-green-300 to-cyan-300 text-black px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                href={project.github}
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
