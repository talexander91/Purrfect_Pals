import React, { useState, useEffect } from "react";

const Shelter = () => {
  const [city, setCity] = useState("");
  const [locations, setLocations] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchAccessToken = async () => {
      const response = await fetch(
        `https://api.petfinder.com/v2/oauth2/token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `${`${process.env.REACT_APP_PETFINDER_API_KEY}:${process.env.REACT_APP_PETFINDER_API_SECRET}`}`,
          },
          body: `grant_type=client_credentials&scope=animals`,
        }
      );
      const data = await response.json();
      setAccessToken(data.access_token);
    };

    fetchAccessToken();
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch(
        `https://api.petfinder.com/v2/organizations?location=${city}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_API_KEY}`,
          },
        }
      );
      const data = await response.json();
      setLocations(data.organizations);
    };

    if (city) {
      fetchLocations();
    }
  }, [city]);

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
      />
      {locations.map((location) => (
        <div key={location.id}>
          <h2>{location.name}</h2>
          <p>{location.address.address1}</p>
          <p>
            {location.address.city}, {location.address.state}{" "}
            {location.address.postcode}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Shelter;
