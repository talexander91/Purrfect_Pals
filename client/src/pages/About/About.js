import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        height: "75vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "center" },
          alignItems: "center",
        }}
      >
        <Box sx={{ m: 1 }}>
          {/* name */}
          <Typography
            sx={{ textAlign: "center", fontSize: 20, fontWeight: "bold", m: 1 }}
          >
            Armond
          </Typography>
          {/* about you */}
          <Typography sx={{ textAlign: "center", m: 1 }}>
            I am a recent Web Development graduate with a love of all parts of
            the stack. Originally with a preference towards back-end technology
            I've come to really love front-end facing parts through learning of
            React. I helped contribute with the front-end on this project.
          </Typography>
          {/* personal shelter link */}
          <Typography sx={{ textAlign: "center", m: 1 }}>
            Consider donating to my favorite shelter:
          </Typography>
          <Typography sx={{ textAlign: "center", m: 1 }}>
            <a href="https://www.arerescue.org/donate">ARE Animal Rescue</a>
          </Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          {/* name */}
          <Typography
            sx={{ textAlign: "center", fontSize: 20, fontWeight: "bold", m: 1 }}
          >
            Bryan
          </Typography>
          {/* about you */}
          <Typography sx={{ textAlign: "center", m: 1 }}>
            I am a recent Web Development graduate with a love of all parts of
            the stack. Originally with a preference towards back-end technology
            I've come to really love front-end facing parts through learning of
            React. I helped contribute with the front-end on this project.
          </Typography>
          {/* personal shelter link */}
          <Typography sx={{ textAlign: "center", m: 1 }}>
            Consider donating to my favorite shelter:
          </Typography>
          <Typography sx={{ textAlign: "center", m: 1 }}>
            <a href="https://www.arerescue.org/donate">ARE Animal Rescue</a>
          </Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          {/* name */}
          <Typography
            sx={{ textAlign: "center", fontSize: 20, fontWeight: "bold", m: 1 }}
          >
            Cleve
          </Typography>
          {/* about you */}
          <Typography sx={{ textAlign: "center", m: 1 }}>
            I am a recent Web Development graduate with a love of all parts of
            the stack. Originally with a preference towards back-end technology
            I've come to really love front-end facing parts through learning of
            React. I helped contribute with the front-end on this project.
          </Typography>
          {/* personal shelter link */}
          <Typography sx={{ textAlign: "center", m: 1 }}>
            Consider donating to my favorite shelter:
          </Typography>
          <Typography sx={{ textAlign: "center", m: 1 }}>
            <a href="https://www.arerescue.org/donate">ARE Animal Rescue</a>
          </Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          {/* name */}
          <Typography
            sx={{ textAlign: "center", fontSize: 20, fontWeight: "bold", m: 1 }}
          >
            Kevin
          </Typography>
          {/* about you */}
          <Typography sx={{ textAlign: "center", m: 1 }}>
            I am a recent Web Development graduate with a love of all parts of
            the stack. Originally with a preference towards back-end technology
            I've come to really love front-end facing parts through learning of
            React. I helped contribute with the front-end on this project.
          </Typography>
          {/* personal shelter link */}
          <Typography sx={{ textAlign: "center", m: 1 }}>
            Consider donating to my favorite shelter:
          </Typography>
          <Typography sx={{ textAlign: "center", m: 1 }}>
            <a href="https://www.arerescue.org/donate">ARE Animal Rescue</a>
          </Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          {/* name */}
          <Typography
            sx={{ textAlign: "center", fontSize: 20, fontWeight: "bold", m: 1 }}
          >
            Travis
          </Typography>
          {/* about you */}
          <Typography sx={{ textAlign: "center", m: 1 }}>
            I am a recent Web Development graduate with a love of all parts of
            the stack. Originally with a preference towards back-end technology
            I've come to really love front-end facing parts through learning of
            React. I helped contribute with the front-end on this project.
          </Typography>
          {/* personal shelter link */}
          <Typography sx={{ textAlign: "center", m: 1 }}>
            Consider donating to my favorite shelter:
          </Typography>
          <Typography sx={{ textAlign: "center", m: 1 }}>
            <a href="https://www.arerescue.org/donate">ARE Animal Rescue</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
