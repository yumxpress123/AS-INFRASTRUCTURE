import React from "react";

const ProfileCard = ({ name, position, image }) => {
  return (
    <div className="min-h-10px bg-white shadow-lg flex flex-col md:flex-row items-center justify-center p-6 md:p-10">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Left - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">{name}</h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-600">{position}</h3>
          <p className="text-gray-700 text-base md:text-lg">



<p>With 7+ years of experience, Ankit Sahu is a visionary civil engineer and CEO of AS Infrastructure, leading the company with innovation, excellence, and sustainability. Under his leadership, AS Infrastructure has successfully delivered residential, commercial, and industrial projects, known for quality, reliability, and client satisfaction.

</p>
<p>
Ankit’s expertise in construction, project planning, and infrastructure development drives the company’s success, integrating modern technology with high safety and eco-friendly practices. His passion and commitment continue to shape the future of construction, transforming landscapes and building a stronger tomorrow.</p>



          </p>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 px-4">
          <img
            src={image}
            alt={name}
            className="w-[300px] max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
