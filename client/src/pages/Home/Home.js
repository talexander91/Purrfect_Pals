import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
function Home() {
  return (
    <Box
      sx={{
        height: "75vh",
        m: 1,
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: { md: "center" },
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Welcome to Purrfect Pals!
        </Typography>
        <Typography>The best place to find your purrfect friend</Typography>
        <img
          id="cat"
          src="https://cdn.discordapp.com/attachments/930428456750182472/1071571970279358524/Screen_Shot_2023-01-30_at_1.45.35_PM-removebg.png"
          alt=""
        />
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Typography
            sx={{
              m: 2,
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Discussion
            <Typography>
              Create a chatroom for any cat breed you're interested in talking
              about!
            </Typography>
          </Typography>
          <Typography
            sx={{
              m: 2,
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Shelter
            <Typography>
              Type in your zip code to see shelters near you!
            </Typography>
          </Typography>
          <Typography
            sx={{
              m: 2,
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            About
            <Typography>
              Learn more about the group who build this website!
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
