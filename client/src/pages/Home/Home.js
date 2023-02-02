import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

function Home() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ThemeProvider theme={theme}>
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
      </ThemeProvider>
    </Box>
  );
}

export default Home;
