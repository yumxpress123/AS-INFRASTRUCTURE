import { ongoingProjectsData } from "../components/ongoingProjectsData ";
import OngoingProjectss from "../components/OngoingProjectss";

const OngoingProjects = () => {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-bold">Ongoing Projects</h2>
        <p>Details of ongoing projects here...</p>
   <OngoingProjectss projects={ongoingProjectsData} />
      </div>
    );
  };
  
  export default OngoingProjects;
  