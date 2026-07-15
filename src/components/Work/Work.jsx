import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };


  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
          >
            <div className="p-4 flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
{selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 md:p-8">
    <div className="relative w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-4xl max-h-[90vh] overflow-y-auto hide-scrollbar rounded-2xl bg-gray-900 shadow-2xl">

      {/* Close Button */}
      <div className="sticky top-0 flex justify-end bg-gray-900 p-4 z-10">
        <button
          onClick={handleCloseModal}
          className="text-white text-3xl font-bold transition-colors duration-300 hover:text-purple-500"
        >
          &times;
        </button>
      </div>

      <div className="flex flex-col">

        {/* Project Image */}
        <div className="flex justify-center px-6">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full max-w-2xl max-h-[320px] object-contain rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            {selectedProject.title}
          </h3>

          <p className="text-gray-400 text-sm lg:text-base leading-7 mb-6">
            {selectedProject.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {selectedProject.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#251f38] text-purple-400 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-300 hover:text-white py-3 rounded-xl font-semibold text-center transition-all duration-300"
            >
              View Code
            </a>

            <a
              href={selectedProject.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold text-center transition-all duration-300"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default Work;
