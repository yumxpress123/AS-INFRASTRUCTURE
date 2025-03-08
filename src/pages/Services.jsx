import ServicesCard from "../components/ServicesCard";
import { servicesData } from "../components/ServicesData";


const Services = () => {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-bold">Our Services ...</h2>
       

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.map((service) => (
        <ServicesCard key={service.id} {...service} />
      ))}
    </div>
        
      </div>
    );
  };
  
  export default Services;
  