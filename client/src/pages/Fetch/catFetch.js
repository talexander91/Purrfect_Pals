import { React, useEffect, useState } from "react";
import CatAvatar from "./catAvatar";

const cat = "siamese";

function CatFetch() {
  const [catPic, setcatPic] = useState({});

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
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CatAvatar catPic={catPic.image_link} />
    </div>
  );
}

export default CatFetch;

