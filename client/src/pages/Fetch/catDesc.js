import React from "react";
import Box from "@mui/material/Box";

const CatDesc = ({ catDesc }) => {
  return (
    <Box>
      <p>Origin from: {catDesc[0]}</p>
      <Box>
        <p>Name: {catDesc[1]}</p>
      </Box>
      <p>Grooming:{catDesc[2]}</p>
      <p>Shedding: {catDesc[3]}</p>
      <p>
        Life expectancy: {catDesc[4]} to {catDesc[5]} years
      </p>
      <p>
        Weight range: {catDesc[6]} to {catDesc[7]} pounds
      </p>
    </Box>
  );
};

export default CatDesc;
