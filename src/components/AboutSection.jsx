import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Box, Typography, Button, Grid } from "@mui/material";

const AboutSection = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } // Start when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        px: { xs: 3, sm: 5, md: 10 },
        py: { xs: 5, md: 10 },
        bgcolor: "#e2e4f7",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Text Content */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "24px", sm: "30px", md: "40px" },
              lineHeight: 1.2,
            }}
          >
            When we focus on mutual success, <br /> everyone wins.
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 2, color: "gray", lineHeight: 1.7, fontSize: { xs: "14px", md: "16px" } }}
          >
            The flexibility to mobilize the right people to deliver unique solutions, an unwavering
            focus on delivering value to your business bottom line; and the capability to leverage
            innovation to meet emerging challenges and keep you at the fore. This is AS
            Infrastructure.
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 2, color: "gray", lineHeight: 1.7, fontSize: { xs: "14px", md: "16px" } }}
          >
            As a company that is 100 percent employee-owned, we collaborate and innovate to help our
            partners thrive. Our culture of ownership drives your success.
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 4, color: "gray", lineHeight: 1.7, fontSize: { xs: "14px", md: "16px" } }}
          >
            Whether you are in the buildings, civil, or industrial market, partnering with AS
            Infrastructure means you're gaining a proven, reliable, and trusted full-service
            partner.
          </Typography>

          <Button
            variant="outlined"
            sx={{
              borderColor: "green",
              color: "green",
              px: 4,
              py: 1,
              fontWeight: "bold",
              fontSize: { xs: "12px", md: "14px" },
              "&:hover": { bgcolor: "green", color: "white" },
            }}
          >
            ABOUT US
          </Button>
        </Grid>

        {/* Right Section - Statistics */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "green",
                  fontSize: { xs: "24px", md: "32px" },
                }}
              >
                <CountUp start={0} end={100} duration={2} delay={0.3} startOnMount={startCount} />+
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "16px" } }}
              >
    Constructions Project
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "green",
                  fontSize: { xs: "24px", md: "32px" },
                }}
              >
                <CountUp start={0} end={5000} decimals={1} duration={2} startOnMount={startCount} />+
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "16px" } }}
              >

                Elevation Design
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "green",
                  fontSize: { xs: "24px", md: "32px" },
                }}
              >
               
                <CountUp start={0} end={10000} duration={2} startOnMount={startCount} />+
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "16px" } }}
              >
                 planning
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "green",
                  fontSize: { xs: "24px", md: "32px" },
                }}
              >
               
                <CountUp start={0} end={15} duration={2} startOnMount={startCount} />+
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "16px" } }}
              >
               Warehouse Project
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "green",
                  fontSize: { xs: "24px", md: "32px" },
                }}
              >
               
                <CountUp start={0} end={1500} duration={2} startOnMount={startCount} />+
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "16px" } }}
              >
                Satisfied Customer
              </Typography>
            </Box>
           
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
