import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import CursorFollower from "./components/CursorFollower"; // Import Cursor Component

const App = () => {
  const location = useLocation(); 
  const isHomePage = location.pathname === "/"; // Check if the current page is Home

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Cursor Follower - Will not appear on mobile */}
      <CursorFollower />

      {/* Show Navbar only if NOT on the Home page */}
      {!isHomePage && <Navbar />}

      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
