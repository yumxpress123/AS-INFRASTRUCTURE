import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

// Sample images (Replace with actual images)
const images = [
  "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741423253/homepage/zu6qzltih9ahcmf1dgv8.avif",
  "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741422949/homepage/niqt3vbbnos1oclo8fk3.jpg",
  "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741422947/homepage/uynsvkdoqrqunsrpplvn.jpg",
  "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741422947/homepage/l71hzqydwvwgdar5qkbt.webp",
  "https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741422947/homepage/gywlbf2kn1umqlmlrkac.webp",
];

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <Box sx={{ width: "100vw", overflow: "hidden", position: "relative" }}>
      {/* Overlay Text */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
           <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: { xs: "18px", sm: "36px", md: "34px" } }}>
         <span style={{ color: "red" }}>AS</span> Infrastructure
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: "bold",paddingLeft:{sm:"40px"},  color:"black", border:"white", fontSize: { xs: "11px", sm: "36px", md: "20px" } }}>
     
    
        We invest in cutting-edge infrastructure to deliver seamless performance.
        Learn about our systems and how they support our commitment to excellence.
        </Typography>
      </Box>

      <Slider {...settings}>
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Slide ${index}`}
            sx={{
              width: "100%",
              height: { xs: "30vh", sm: "60vh", md: "80vh", lg: "90vh" }, // Responsive heights
              objectFit: "cover",
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
