import { React, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import CatAvatar from "./catAvatar";
import CatDesc from "./catDesc";
import Box from '@mui/material/Box';
import LoadDiscussionById from "../LoadDiscussionById/LoadDiscussionById";


function CatFetch(props) {
  const navigate = useNavigate();
  const [catPic, setcatPic] = useState({});
  const [catDesc, setcatDesc] = useState({});
  
  const handleClick = () => {
    navigate(`/discussion/${props.discussion}`, { state: { discussion: props.discussion }});

  };
  
  let cat = props.catName;
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
    fetchData()
  }, []);

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      width: "90%",
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }} onClick={handleClick}>
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

