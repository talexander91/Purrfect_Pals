import { React, useEffect, useState } from "react";
import CatAvatar from "./catAvatar";
import CatDesc from "./catDesc"

const cat = "siamese";

function CatFetch() {
  const [catPic, setcatPic] = useState({});
  const [catDesc, setcatDesc] = useState({});

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
    <div>
      <CatAvatar catPic={catPic.image_link} />
      <CatDesc catDesc={[catDesc.origin, catDesc.shedding, catDesc.grooming, catDesc.min_weight, catDesc.max_weight, catDesc.min_life_expectancy, catDesc.max_life_expectancy, catDesc.name]} />
    </div>
  );
}

export default CatFetch;
