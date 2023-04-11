import setCameraPosition from "./setCameraPosition";
import getPlanetPosition from "./getPlanetPositon"
import hideMainModal from "./hideMainModal";
import displayPlanetModal from "./displayPlanetModal";

const sendToPlanet = (planet) => {
  const planetPosition = getPlanetPosition(planet) 
  hideMainModal();
  // displayPlanetModal(planet)


  setCameraPosition(planetPosition);
};

export default sendToPlanet;
