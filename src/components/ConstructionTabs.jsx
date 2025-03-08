import React, { useState } from "react";
import { Box, Typography, Button, Grid, Tabs, Tab } from "@mui/material";

const projectData = {
  buildings: {
    title: "We have a vision for the future of construction.",
    description:
      "We believe in creating architectural landmarks that stand the test of time. Our expertise in commercial, residential, and mixed-use developments allows us to seamlessly blend aesthetics, functionality, and sustainability into every project. Whether it's high-rise structures, corporate offices, or smart homes, we prioritize quality craftsmanship, energy efficiency, and cutting-edge design. Backed by a team of skilled professionals and advanced construction techniques, we deliver projects that redefine modern living and working spaces.",
    image: "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741424141/4images/tisfgmonbuhbe31o9m3z.jpg", // Change to actual image path
  },
  civil: {
    title: "Innovating Civil Infrastructure.",
    description:
      "Infrastructure is the backbone of progress, and our team is dedicated to designing and constructing world-class civil infrastructure that enhances connectivity, sustainability, and safety. From highways, bridges, and tunnels to airports, rail networks, and urban planning, we ensure that every project adheres to global engineering standards and best practices. With a commitment to eco-friendly solutions and innovative technology, we contribute to the development of smarter, more resilient cities that serve communities for generations to come.",
    image: "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741424141/4images/mh2csjwf5bqstoa5v3us.jpg", // Change to actual image path
  },
  industrial: {
    title: "Heavy Industrial Projects Redefined.",
    description:
      "We specialize in large-scale industrial construction that supports the world’s most demanding industries. Our expertise spans manufacturing plants, energy facilities, refineries, and heavy engineering projects, ensuring seamless integration of precision, safety, and efficiency. With a focus on advanced materials, automation, and industry-leading safety protocols, we deliver turnkey solutions that empower industries to maximize productivity, minimize downtime, and drive long-term growth.",
    image: "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741424140/4images/sxlko65y8cerpxbtwfhz.webp", // Change to actual image path
  },
  special: {
    title: "Unique solutions for specialized needs.",
    description:
      "Every project is unique, and our special projects division is dedicated to delivering customized, high-impact solutions for niche construction needs. Whether it's heritage restorations, complex renovations, specialized research facilities, or one-of-a-kind architectural projects, we approach each challenge with precision, creativity, and an unwavering commitment to excellence. Our ability to adapt, innovate, and exceed expectations has made us a trusted partner for clients seeking unparalleled expertise in specialized construction.",
    image: "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741424140/4images/y2ebjdrsodzdjtslrzfu.webp", // Change to actual image path
  },
};

const ConstructionTabs = () => {
  const [activeTab, setActiveTab] = useState("special");

  return (
    <Box sx={{ px: { xs: 3, sm: 5, md: 10 }, py: { xs: 5, md: 10 }, bgcolor: "white" }}>
      <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: "bold", color: "gray" }}>
        What We Do
      </Typography>

      <Typography variant="h3" sx={{ fontWeight: "bold", mt: 1, mb: 3, fontSize: { xs: "24px", md: "40px" } }}>
        {projectData[activeTab].title}
      </Typography>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={(event, newValue) => setActiveTab(newValue)}
        indicatorColor="primary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3, borderBottom: "1px solid lightgray" }}
      >
        <Tab label="Buildings" value="buildings" sx={{ color: activeTab === "buildings" ? "green" : "black" }} />
        <Tab label="Civil Infrastructure" value="civil" sx={{ color: activeTab === "civil" ? "green" : "black" }} />
        <Tab label="Heavy Industrial" value="industrial" sx={{ color: activeTab === "industrial" ? "green" : "black" }} />
        <Tab label="Special Projects" value="special" sx={{ color: activeTab === "special" ? "green" : "black" }} />
      </Tabs>

      {/* Content Section */}
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={projectData[activeTab].image}
            alt={activeTab}
            sx={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: 3,
              maxHeight: { xs: 250, md: 400 },
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            {projectData[activeTab].title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "gray", lineHeight: 1.7 }}>
            {projectData[activeTab].description}
          </Typography>

          <Button
            variant="outlined"
            sx={{
              borderColor: "green",
              color: "green",
              px: 4,
              py: 1,
              fontWeight: "bold",
              fontSize: "14px",
              "&:hover": { bgcolor: "green", color: "white" },
            }}
          >
            LEARN MORE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConstructionTabs;
