import React from "react";

const OngoingProjectss = ({ projects }) => {
  return (
    <div className="container mx-auto px-4 py-10">

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } gap-8 md:gap-16`}
          >
            {/* Left - Description */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                    ✅ {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Image */}
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingProjectss;
