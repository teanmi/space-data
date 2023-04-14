import setCameraPosition from "./setCameraPosition";
import getPlanetPosition from "./getPlanetPositon"
import hideMainModal from "./hideMainModal";
import displayPlanetModal from "./displayPlanetModal";

const sendToPlanet = (planet) => {
  let planetName = planet.toLowerCase()
  const planetPosition = getPlanetPosition(planetName) 
  hideMainModal();
  
  displayPlanetModal(planetName)


  setCameraPosition(planetPosition);
};

export default sendToPlanet;
