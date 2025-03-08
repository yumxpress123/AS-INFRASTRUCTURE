import React from "react";
import { Instagram, Twitter, YouTube, LinkedIn, Facebook } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-white py-6 px-4 md:px-16 text-center">
      {/* Top Section - Links */}
      <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm md:text-base">
        <a href="#" className="hover:underline">
          Contact Us
        </a>
        <a href="#" className="hover:underline">
          Ethics/Code of Conduct
        </a>
        <a href="#" className="hover:underline">
          Hourly Employee Information
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Tools & Resources
        </a>
      </div>

      {/* Middle Section - Logo */}
      <div className="flex justify-center my-4">
        <img
          src="https://res-console.cloudinary.com/dhbvmqhmg/media_explorer_thumbnails/9153a42e5668632086f7fac15acc65a5/detailed" // Replace with actual logo path
          alt="AS Infrastructure"
          className=""
          width={100}
          height={100}
        />
      </div>

      {/* Bottom Section - Social Media Icons */}
      <div className="flex justify-center gap-4 text-green-900 text-2xl">
        <a href="https://www.instagram.com/as_infrastructure_pvt_ltd/" className="hover:text-green-700">
          <Instagram fontSize="inherit" />
        </a>
        <a href="#" className="hover:text-green-700">
          <Twitter fontSize="inherit" />
        </a>
        <a href="#" className="hover:text-green-700">
          <YouTube fontSize="inherit" />
        </a>
        <a href="#" className="hover:text-green-700">
          <LinkedIn fontSize="inherit" />
        </a>
        <a href="#" className="hover:text-green-700">
          <Facebook fontSize="inherit" />
        </a>
      </div>

      {/* Copyright Text */}
      <div className="text-gray-500 text-xs md:text-sm mt-4">
        Copyright © 2025 AS Infrastructure Inc | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
