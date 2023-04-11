import getCameraPosition from "./getCameraPosition";
import { setCurrentZoom } from "./currentZoom";

const cameraPosition = getCameraPosition();


const getPlanetPositon = (planet) => {
  let position;
  switch (planet) {
    case "mercury":
      const mercuryZoom = 1250;
      position = [-7, 0, mercuryZoom / cameraPosition];
      setCurrentZoom(mercuryZoom)
      break;

    case "venus":
      const venusZoom = 1550;

      position = [-5.5, 0, venusZoom / cameraPosition];
      setCurrentZoom(venusZoom)

      break;

    case "earth":
      const earthZoom = 2250;

      position = [-3.8, 0, earthZoom / cameraPosition];
      setCurrentZoom(earthZoom)

      break;

    case "mars":
      const marsZoom = 2050;

      position = [-2, 0, marsZoom / cameraPosition];
      setCurrentZoom(marsZoom)

      break;

    case "jupiter":
      const jupiterZoom = 4250;

      position = [0.75, 0, jupiterZoom / cameraPosition];
      setCurrentZoom(jupiterZoom)

      break;

    case "saturn":
      const saturnZoom = 3550;

      position = [4.7, 0, saturnZoom / cameraPosition];
      setCurrentZoom(saturnZoom)

      break;

    case "uranus":
      const uranusZoom = 2850;

      position = [8, 0, uranusZoom / cameraPosition];
      setCurrentZoom(uranusZoom)

      break;

    case "neptune":
      const neptuneZoom = 2550;

      position = [10.8, 0, neptuneZoom / cameraPosition];
      setCurrentZoom(neptuneZoom)

      break;

    default:
      console.log("ERROR: getPlanetPosition provided with incorrect planet name of " + planet + ". Please Fix.")
  }
  return position;

};


export default getPlanetPositon;
