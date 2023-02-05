import { React, useEffect, useState } from "react";
import CatAvatar from "./catAvatar";
import CatDesc from "./catDesc";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom"

function CatFetch(catName, discussion) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/discussion/${discussion._id}`);
  };

  const [catPic, setcatPic] = useState({});
  const [catDesc, setcatDesc] = useState({});
  let cat = catName.catName;
  async function fetchData() {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/cats?name=${cat}`,
      {
        method: "GET",
        headers: { "x-api-key": `hTgqdzCr/pU7UDtrEuKJZg==zHD8TBYyJD59ie7n` },
      }
    );
    const data = await response.json();
    setcatPic(data[0]);
    setcatDesc(data[0]);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "90%",
        backgroundColor: "#F4EBE7",
        border: 1,
        m: 1,
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <CatAvatar catPic={catPic.image_link} />
      <CatDesc
        catDesc={[
          catDesc.origin,
          catDesc.name,
          catDesc.grooming,
          catDesc.shedding,
          catDesc.min_life_expectancy,
          catDesc.max_life_expectancy,
          catDesc.min_weight,
          catDesc.max_weight,
        ]}
      />
    </Box>
  );
}

export default CatFetch;
