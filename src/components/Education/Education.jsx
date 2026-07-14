import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      {/* Education Card */}
      <div className="w-full">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="w-full bg-gray-900 border border-white rounded-2xl shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md p-8 flex flex-col md:flex-row items-center gap-8 transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Left - Logo (1/6) */}
            <a
              href={edu.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-28 h-28 rounded-full border border-white/70 bg-[#0f0f0f] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-purple-500 group-hover:scale-105">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-[90%] h-[90%] object-contain rounded-full"
                />
              </div>
            </a>

            {/* Right - Content (5/6) */}
            <div className="w-full md:w-5/6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <h4>{edu.school}</h4>
                  </a>
                </div>

                <p className="text-md text-gray-500 font-bold mt-2 md:mt-0">
                  {edu.date}
                </p>
              </div>

              <p className="mt-4 text-gray-400 font-bold">
                Grade: {edu.grade}  (Up to Semester V)
              </p>

              <p className="mt-4 text-gray-400 leading-7">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
