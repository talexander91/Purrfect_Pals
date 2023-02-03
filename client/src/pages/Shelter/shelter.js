import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Shelter = () => {
  const [zipCode, setZipCode] = useState("");
  const [shelters, setShelters] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [formState, setFormState] = useState("");

  useEffect(() => {
    const fetchAccessToken = async () => {
      const response = await fetch(
        `https://api.petfinder.com/v2/oauth2/token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_API_KEY}:${process.env.REACT_APP_PETFINDER_API_SECRET}`,
          },
          body: `grant_type=client_credentials&client_id=PS7irPofRH0W5lhKwBomck4VuWfIjGXRd70lLhdTs0u09XScRK&client_secret=6MPyIlTJzsXyrSTCwSOqr9Q6DGmnEpQ69kv41RF8`,
        }
      );
      const data = await response.json();
      setAccessToken(data.access_token);
    };

    fetchAccessToken();
  }, []);

  const handleInputChange = ({ target: { value } }) => {
    setZipCode(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (zipCode) {
      const fetchShelters = async () => {
        const response = await fetch(
          `https://api.petfinder.com/v2/organizations?location=${zipCode}&distance=100`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        setShelters(data.organizations);
      };

      fetchShelters();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: 2,
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={zipCode}
          onChange={handleInputChange}
          placeholder="Enter zip code"
        />
        <button type="submit">Search</button>
      </form>
      {shelters.map((shelter) => (
        <Box sx={{ textAlign: "center", m: 1 }} key={shelter.id}>
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            <a href={shelter.website}>{shelter.name}</a>
          </Typography>
          <p>{shelter.address.address1}</p>
          <p>
            {shelter.address.city}, {shelter.address.state}{" "}
            {shelter.address.postcode}
          </p>
        </Box>
      ))}
    </Box>
  );
};

export default Shelter;
