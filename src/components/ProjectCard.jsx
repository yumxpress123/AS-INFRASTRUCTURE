const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 hover:bg-green-400 transition hover:scale-105 duration-300">
     <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-lg font-bold mt-2">{project.name}</h2>
        <p className="text-sm text-gray-600">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
