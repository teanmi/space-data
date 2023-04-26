import React, { useEffect, useState } from "react";
import PlanetModal from "./planetModal";
import axios from "axios";
import rapidApiKey from "../keys";

const options = {
  method: "GET",
  url: "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
  },
};

const planets = [
  { name: "mercury", description: "" },
  { name: "venus", description: "" },
  { name: "earth", description: "" },
  { name: "mars", description: "" },
  { name: "jupiter", description: "" },
  { name: "saturn", description: "" },
  { name: "uranus", description: "" },
  { name: "neptune", description: "" },
];

//, api stats,

const PlanetModals = () => {
  const [planetDataLoading, setPlanetDataLoading] = useState(false);

  useEffect(() => {
    async function fetchPlanetData() {
      setPlanetDataLoading(true);

      const response = await axios.request(options);
      const data = response.data;

      data.forEach((planet) => {
        const planetIndex = planet.planetOrder - 1;
        planets[planetIndex].description = planet.description;
      });

      setPlanetDataLoading(false);
    }

    fetchPlanetData();
  }, []);

  return (
    <ul id="plantModals">
      {planets.map((planet, index) => {
        return (
          <PlanetModal
            key={index}
            planet={planet}
            index={index}
            planets={planets}
            loading={planetDataLoading}
          />
        );
      })}
    </ul>
  );
};

export default PlanetModals;
