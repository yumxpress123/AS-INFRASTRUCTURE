import AboutSection from "../components/AboutSection";
import CallToAction from "../components/CallToAction";
import ConstructionTabs from "../components/ConstructionTabs";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";


const Home = () => {
  return (
    <div className="overflow-hidden">

<div className="w-screen overflow-hidden">
   <Navbar/>
      <div > {/* Ensures navbar doesn't overlap */}
   
      <ImageSlider />
      </div>
      <AboutSection/>
      <ConstructionTabs/>


      <ProfileCard
  name="Ankit Sahu"
  position="CEO"

  image="https://www.shutterstock.com/shutterstock/photos/2534007907/display_1500/stock-photo-business-confidence-and-portrait-of-man-in-office-for-opportunity-architecture-or-ambition-at-2534007907.jpg" // ✅ Corrected
/>

      <CallToAction/>

    </div>
    </div>
    
  );
};

export default Home;
