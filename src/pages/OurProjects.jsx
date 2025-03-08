import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { id: 1, name: "Luxury Home", image: "https://res-console.cloudinary.com/dhbvmqhmg/media_explorer_thumbnails/479e7a4a78faa3cf48f20bc0a6c701ec/detailed", description: "Modern luxury villa with premium materials." },
  { id: 2, name: "Skyscraper", image: "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp", description: "A high-rise commercial building." },
  { id: 3, name: "Modern Apartment", image: "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp", description: "Spacious and elegant apartments." },
  { id: 4, name: "Shopping Mall", image: "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp", description: "A modern commercial shopping mall." },
  { id: 5, name: "Beach House", image: "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp", description: "Beautiful house with oceanfront view." },
  { id: 6, name: "Corporate Tower", image: "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp", description: "A high-rise corporate office tower." },
  { id: 7, name: "Suburban Home", image: "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp", description: "Cozy suburban house for families." },
  { id: 8, name: "Mountain Resort", image: "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp", description: "A relaxing resort in the mountains." },
  { id: 9, name: "Industrial Park", image: "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp", description: "Large industrial development area." },
  { id: 10, name: "Eco-Friendly Housing", image: "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp", description: "Sustainable and green housing projects." },
];

const OurProjects = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Our Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
