import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    name: "WareHouse",
    image:
      "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741617023/4images/OUR%20PROJECTS%20SECTION/COMPLETE%20PROJECTS/e8prkaa2m3piecqdv7fa.jpg",
    description:
      "Modern and secure warehouse designed for efficient storage and logistics. Equipped with ample space, advanced safety measures, and seamless accessibility for smooth operations.",
  },

  {
    id: 2,
    name: "Comercial Complex",
    image:
      "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741618083/4images/OUR%20PROJECTS%20SECTION/COMPLETE%20PROJECTS/ftsmplsjhizlnbdmpfmu.jpg",
    description:
      "A modern and well-designed commercial complex offering premium spaces for businesses, retail stores, and offices. Built with high-quality infrastructure, excellent connectivity, and advanced facilities to ensure a seamless business experience.",
  },
  {
    id: 3,
    name: "Warehouse",
    image:
      "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741618968/4images/OUR%20PROJECTS%20SECTION/COMPLETE%20PROJECTS/sn7pxy6ybveyigkfimrq.jpg",
    description: "A well-structured and secure warehouse designed to support efficient storage, inventory management, and seamless logistics operations. Built with high-quality materials, ensuring durability, safety, and accessibility for smooth handling of goods.",
  },
  {
    id: 4,
    name: "WareHouse",
    image:
      "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741619507/4images/OUR%20PROJECTS%20SECTION/COMPLETE%20PROJECTS/yv7glcowqnvkiety4ccv.jpg",
    description: "A well-structured and secure warehouse designed to support efficient storage, inventory management, and seamless logistics operations. Built with high-quality materials, ensuring durability, safety, and accessibility for smooth handling of goods.",
  },
  {
    id: 5,
    name: "Sitaram Complex",
    image:
      "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741619761/4images/OUR%20PROJECTS%20SECTION/COMPLETE%20PROJECTS/canzaabqzrsu8vr8kz9p.jpg",
    description: "A modern and well-designed commercial complex offering premium spaces for businesses, retail stores, and offices. Built with high-quality infrastructure, excellent connectivity, and advanced facilities to ensure a seamless business experience.",
  },
  {
    id: 6,
    name: "Hirani residency",
    image:
      "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741621203/4images/OUR%20PROJECTS%20SECTION/COMPLETE%20PROJECTS/lm5a2rnmz5dczbdncvt9.jpg",
    description: "A premium residential complex offering modern amenities, spacious apartments, and a serene environment. Designed for comfort, security, and convenience, providing a perfect living experience for families and individuals.",
  },
  {
    id: 7,
    name: "Luxury House",
    image:
      "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741621611/4images/OUR%20PROJECTS%20SECTION/COMPLETE%20PROJECTS/l8qgkdw53sporhplwakh.jpg",
    description: "Cozy Luxury house for families.",
  },
  // {
  //   id: 8,
  //   name: "Mountain Resort",
  //   image:
  //     "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp",
  //   description: "A relaxing resort in the mountains.",
  // },
  // {
  //   id: 9,
  //   name: "Industrial Park",
  //   image:
  //     "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp",
  //   description: "Large industrial development area.",
  // },
  // {
  //   id: 10,
  //   name: "Eco-Friendly Housing",
  //   image:
  //     "https://www.livehome3d.com/assets/img/win/realistic-lighting@2x.webp",
  //   description: "Sustainable and green housing projects.",
  // },
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


<h1 className="flex justify-center font-bold items-center text-2xl" >Much More...❣️</h1>

    </div>

    
  );
};

export default OurProjects;
