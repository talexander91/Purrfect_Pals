import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CatAvatar from "./catAvatar";
import CatDesc from "./catDesc";
import Box from "@mui/material/Box";
import LoadDiscussionById from "../LoadDiscussionById/LoadDiscussionById";

function CatFetch(props) {
  const [catPic, setcatPic] = useState({});
  const [catDesc, setcatDesc] = useState({});

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
    console.log("hello", catPic.image_link, (catPic.image_link !== undefined))
  }


  // useEffect(() => {
  //   if (catPic.image_link !== undefined){
  //     console.log(catPic)
  //   fetchData();}
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      {!catPic ? (<noscript></noscript>) : (<Box
        sx={{
          display: "flex",
          flexDirection: "",
          border: 1,
          m: 1,
          width: "90%",
          backgroundColor: "#F4EBE8",
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
      </Box>)}
    </div>
  );
}

export default CatFetch;
