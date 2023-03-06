import setCameraPosition from "./setCameraPosition";
import getCameraPosition from "./getCameraPosition";
import getPlanetPosition from "./getPlanetPositon"

const sendToPlanet = (planet) => {
  const cameraPosition = getCameraPosition()
  getPlanetPosition(planet) // fix
  // hideMainModal();
  // displayModal(planet)


  setCameraPosition();
};

export default sendToPlanet;
