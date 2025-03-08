import React from "react";
import MoviesList from "./MoviesList"; // Import the reusable component

const Services = () => {
  const movies = [
    {
      title: "Inception",
      description: "A thief who enters the dreams of others to steal their secrets...",
      duration: "148 min",
      year: "2010",
      director: "Christopher Nolan",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      rating: 8.8,
      imdbLink: "https://www.imdb.com/title/tt1375666/",
      poster: "https://m.media-amazon.com/images/I/51wzECc4zyL.jpg",
    },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <ul className="list-disc pl-5">
        <li>Building Planning</li>
        <li>3D Elevation</li>
        <li>Interior/Exterior Design</li>
        <li>Building Estimation</li>
        <li>Building Permission</li>
        <li>Construction with Material</li>
        <li>Consultant</li>
      </ul>

      {/* Include the MoviesList component */}
      <h2 className="text-2xl font-bold mt-10">Recommended Movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Services;
