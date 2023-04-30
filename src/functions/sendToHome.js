import { setCurrentZoom } from "./currentZoom";
import getCameraPositionZModifier from "./getCameraPositionZModifier";
import { showMainModal } from "./mainModalFunctions";
import { hidePlanetModal } from "./planetModalFunctions";
import { setCameraPosition } from "./cameraPositionFunctions";
import tweenCamera from "./tweenCamera";
import * as THREE from "three";

const sendToHome = (planet) => {
  const cameraPosition = getCameraPositionZModifier();

  const homePosition = [0, 0, 12500 / cameraPosition];

  const targetPosition = new THREE.Vector3(
    homePosition[0],
    homePosition[1],
    homePosition[2]
  );

  showMainModal();

  hidePlanetModal(planet);

  setCurrentZoom(12500);

  // setCameraPosition(homePosition);

  tweenCamera(targetPosition, 2500);
};

export default sendToHome;
