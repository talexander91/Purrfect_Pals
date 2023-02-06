import React from "react";
import { Box } from "@mui/system";

const CatAvatar = ({ catPic }) => {
  return (
    <Box
      sx={{
        visibility: { xs: "hidden", md: "visible" },
        height: { xs: "0px", md: "100%" },
        width: { xs: "0px", md: "100%" },
      }}
    >
      <img src={catPic} height="200" />
    </Box>
  );
};

export default CatAvatar;
