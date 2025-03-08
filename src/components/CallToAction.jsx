import React from "react";
import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CallToAction = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <Box sx={{ bgcolor: "#f8f9fa", py: 8, px: { xs: 3, md: 10 } }}>
      {/* Main Content Section */}
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "24px", sm: "32px", md: "40px" },
            }}
          >
            Ready to work together?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", fontSize: { xs: "14px", md: "16px" }, mb: 4 }}
          >
            Whether you have a project in mind and you're looking for a reliable
            construction partner or you're looking to take the next step in your
            career, we want to hear from you!
          </Typography>
          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#004d26",
                color: "white",
                px: 3,
                py: 1,
                "&:hover": { bgcolor: "#00391c" },
              }}
              onClick={() => navigate("/contact")} // Redirect to Contact Page
            >
              Build a Project with Us
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#004d26",
                color: "#004d26",
                px: 3,
                py: 1,
                "&:hover": { borderColor: "#00391c", color: "#00391c" },
              }}
              onClick={() => navigate("/contact")} // Redirect to Contact Page
            >
              Build a Career with Us
            </Button>
          </Box>
        </Grid>

        {/* Decorative Right-Side Image */}
        <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src="https://res.cloudinary.com/dhbvmqhmg/image/upload/v1741425735/uok8gfpukgakbjxizxcj.avif" // Replace with actual image path
            alt="Decorative Pattern"
            sx={{
              width: "100%",
              maxWidth: 400,
            }}
          />
        </Grid>
      </Grid>

      {/* Email Subscription Section */}
      <Box sx={{ mt: 6, bgcolor: "#004d26", p: 4, borderRadius: "8px", color: "white" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Get our insights delivered straight to your inbox!
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Subscribe now to get the latest information about construction trends,
          innovations, and best practices.
        </Typography>
        {/* Subscription Input */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            sx={{
              bgcolor: "white",
              borderRadius: "5px",
              flexGrow: 1,
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "#004d26",
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CallToAction;
