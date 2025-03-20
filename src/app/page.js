"use client";
import React from "react";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar"; // Also missing for MentorCard
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { AccountCircle, Person } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";

// Mentor Card Component
const MentorCard = ({ name, position }) => {
  const [rating, setRating] = useState("4.5");

  useEffect(() => {
    setRating((4.5 + Math.random() * 0.5).toFixed(1));
  }, []);

  return (
    <Card
      sx={{
        minWidth: 250,
        textAlign: "center",
        p: 2,
        m: 1,
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(135deg, #1E293B, #334155)",
        color: "#fff",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <Avatar
        sx={{ width: 80, height: 80, margin: "auto", bgcolor: "#4F46E5" }}
      />
      <Typography variant="h6" fontWeight="bold" mt={1}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        {position}
      </Typography>

      <Button
        variant="contained"
        size="small"
        sx={{
          mt: 1,
          px: 2,
          py: 0.5,
          borderRadius: "20px",
          backgroundColor: "#22C55E",
          fontSize: "0.75rem",
          fontWeight: "bold",
          textTransform: "none",
          color: "#fff",
          "&:hover": { backgroundColor: "#16A34A" },
        }}
      >
        ⭐ {rating}
      </Button>

      <Button
        variant="contained"
        size="small"
        sx={{
          mt: 2,
          px: 2,
          py: 0.5,
          borderRadius: "20px",
          backgroundColor: "#2563EB",
          fontSize: "0.75rem",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": { backgroundColor: "#1E40AF" },
        }}
      >
        View Profile
      </Button>
    </Card>
  );
};

// Industry Guidance Section
const IndustryGuidance = () => {
  const categories = [
    "Problem Solution",
    "Market Research",
    "Minimal Viable Product",
    "Startup Methodology",
  ];
  const articles = Array(4).fill({
    title: "Article",
    description: "Learn how to build and validate your startup ideas.",
  });

  return (
    <Box mt={6} px={4}>
      <Typography variant="h5" fontWeight="bold" color="#E2E8F0">
        Industry Guidance
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
        {categories.map((category, index) => (
          <Chip
            key={index}
            label={category}
            sx={{
              backgroundColor: "#8B5CF6",
              color: "#fff",
              fontWeight: "bold",
            }}
          />
        ))}
      </Box>

      <Grid container spacing={2} mt={2}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: "#1E293B",
                color: "#fff",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {article.title} {index + 1}
              </Typography>
              <Typography variant="body2" color="#CBD5E1">
                {article.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Startup Ideas Section
const StartupIdeas = () => {
  const startupRoles = Array(3).fill({
    title: "Software Development Engineer",
    avgSalary: "5.6L",
    demandIncrease: "27%",
  });

  return (
    <Box mt={6} px={4}>
      <Typography variant="h5" fontWeight="bold" color="#E2E8F0">
        Startup Ideas
      </Typography>

      <Grid container spacing={2} mt={2}>
        {startupRoles.map((role, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#1E293B",
                color: "#fff",
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {role.title}
              </Typography>
              <Typography variant="body2" color="red" fontWeight="bold">
                Avg. salary {role.avgSalary} | {role.demandIncrease} ↑ demand
                since last year
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  backgroundColor: "#2563EB",
                  "&:hover": { backgroundColor: "#1E40AF" },
                }}
              >
                CHECK READINESS
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Home Page Component
const HomePage = () => {
  const scrollRef = useRef(null);

  return (
    <Box
      sx={{
        backgroundColor: "#0F172A",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
        paddingBottom: 4,
      }}
    >
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #3B82F6, #9333EA)",
          padding: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontFamily: "Poppins, sans-serif" }}
          >
            ENTREPRENEURSHIP
          </Typography>
          <Box>
            {["ChatBot", "Learning Hub"].map((btn, index) => (
              <Button
                key={index}
                variant="contained"
                sx={{
                  mx: 1,
                  backgroundColor: index === 0 ? "#10B981" : "#FBBF24",
                  color: "#fff",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                {btn}
              </Button>
            ))}

            <Tooltip title="Login / SignUp">
              <IconButton sx={{ color: "white", mx: 1 }}>
                <AccountCircle fontSize="large" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Profile">
              <IconButton sx={{ color: "white", mx: 1 }}>
                <Person fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box textAlign="center" py={5}>
        <Typography variant="h4" fontWeight="bold" color="#E2E8F0">
          Boost Your StartUp with Us
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#2563EB",
            "&:hover": { backgroundColor: "#1E40AF" },
          }}
        >
          Explore
        </Button>
      </Box>

      {/* Features */}
      <Grid container spacing={2} justifyContent="center">
        {[
          "Smart Knowledge Hub",
          "Seamless Networking",
          "Learning & Collaboration",
        ].map((text, index) => (
          <Grid item key={index}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#334155",
                color: "#F1F5F9",
                fontWeight: "bold",
              }}
            >
              {text}
            </Button>
          </Grid>
        ))}
      </Grid>

      <IndustryGuidance />
      <StartupIdeas />

      {/* Top Mentors Section */}
      <Box mt={6} px={4}>
        <Typography variant="h5" fontWeight="bold" color="#E2E8F0">
          Top Mentors
        </Typography>
        <Box
          ref={scrollRef}
          sx={{ display: "flex", overflowX: "auto", gap: 2, p: 2 }}
        >
          {[...Array(6)].map((_, index) => (
            <MentorCard
              key={index}
              name={`Mentor ${index + 1}`}
              position="Expert in Startup Growth"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
