import getCameraPosition from "./getCameraPosition";
import { showMainModal } from "./mainModalFunctions";
import { hidePlanetModal } from "./planetModalFunctions";
import setCameraPosition from "./setCameraPosition";

const sendToHome = (planet = undefined) => {
  showMainModal();

  if (planet) {
    hidePlanetModal(planet);
  }

  const cameraPosition = getCameraPosition();

  setCameraPosition([0, 0, 12500 / cameraPosition]);
};

export default sendToHome;
