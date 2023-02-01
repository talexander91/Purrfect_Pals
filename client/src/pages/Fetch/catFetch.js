import { React, useEffect, useState } from "react";
import CatAvatar from "./catAvatar";
<<<<<<< HEAD
import CatDesc from "./catDesc";
=======
import CatDesc from "./catDesc"
>>>>>>> e7462ddbe9e91e4945afd726766675e1d241cc84

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
<<<<<<< HEAD
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
=======
      <CatDesc catDesc={[catDesc.origin, catDesc.shedding, catDesc.grooming, catDesc.min_weight, catDesc.max_weight, catDesc.min_life_expectancy, catDesc.max_life_expectancy, catDesc.name]} />
>>>>>>> e7462ddbe9e91e4945afd726766675e1d241cc84
    </div>
  );
}

export default CatFetch;
