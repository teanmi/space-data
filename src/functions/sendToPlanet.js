import { setCameraPosition } from "./cameraPositionFunctions";
import getPlanetPosition from "./getPlanetPositon";
import { hideMainModal } from "./mainModalFunctions";
import { hidePlanetModal, showPlanetModal } from "./planetModalFunctions";
import * as THREE from "three";
import tweenCamera from "./tweenCamera";

const sendToPlanet = (nextPlanet, currentPlanet = undefined) => {
  const nextPlanetName = nextPlanet.toLowerCase();

  const nextPlanetPosition = getPlanetPosition(nextPlanetName);

  const targetPosition = new THREE.Vector3(
    nextPlanetPosition[0],
    nextPlanetPosition[1],
    nextPlanetPosition[2]
  );

  if (currentPlanet) {
    const currentPlanetName = currentPlanet.toLowerCase();

    hidePlanetModal(currentPlanetName);
  }

  hideMainModal();

  showPlanetModal(nextPlanetName);

  // setCameraPosition(nextPlanetPosition);
  
  tweenCamera(targetPosition, 2000)
};

export default sendToPlanet;
