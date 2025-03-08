import { useParams } from "react-router-dom";
import { projectsData } from "./ProjectData";

const ProjectDetail = () => {
  const { id } = useParams(); // Get project ID from the URL
  const project = projectsData.find((p) => p.id === parseInt(id)); // Find project by ID

  if (!project) {
    return <h2 className="text-center text-2xl font-bold">Project Not Found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Project Title */}
      <h2 className="text-4xl font-bold mb-4">{project.title}</h2>

      {/* Project Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 text-sm">
        <div>
          <h3 className="font-semibold">Client</h3>
          <p>{project.client}</p>
        </div>
        <div>
          <h3 className="font-semibold">Delivery Method</h3>
          <p>{project.deliveryMethod}</p>
        </div>
        <div>
          <h3 className="font-semibold">Completion Date</h3>
          <p>{project.completionDate}</p>
        </div>
        <div>
          <h3 className="font-semibold">Location</h3>
          <p>{project.location}</p>
        </div>
        <div>
          <h3 className="font-semibold">Sector</h3>
          <p>{project.sector}</p>
        </div>
        <div>
          <h3 className="font-semibold">Markets</h3>
          <p>{project.markets}</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold">Project Overview</h3>
        <p className="mt-4 text-gray-700">{project.description}</p>

        <ul className="list-disc mt-4 pl-5 text-gray-700">
          {project.highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="mt-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-lg shadow-md"
        />
        <p className="text-sm text-gray-500 mt-2">A visual representation of the project.</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
