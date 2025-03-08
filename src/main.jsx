import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

import "./index.css";
import OurProjects from "./pages/OurProjects";
import ProjectDetails from "./components/ProjectDetails";
import OngoingProjects from "./pages/OngoingProjects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<OurProjects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="ongoing-projects" element={<OngoingProjects />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
