import setCameraPosition from "./setCameraPosition";
import getPlanetPosition from "./getPlanetPositon";
import { hideMainModal } from "./mainModalFunctions";
import { hidePlanetModal, showPlanetModal } from "./planetModalFunctions";

const sendToPlanet = (nextPlanet, currentPlanet = undefined) => {

  const nextPlanetName = nextPlanet.toLowerCase();

  const nextPlanetPosition = getPlanetPosition(nextPlanetName);

  if (currentPlanet) {
    const currentPlanetName = currentPlanet.toLowerCase();
    hidePlanetModal(currentPlanetName);
  }

  hideMainModal();

  showPlanetModal(nextPlanetName);

  setCameraPosition(nextPlanetPosition);
};

export default sendToPlanet;
