import getCameraPosition from "./getCameraPosition";
import { setCurrentZoom } from "./currentZoom";

const cameraPosition = getCameraPosition();

// finish

const getPlanetPositon = (planet) => {
  switch (planet) {
    case "mercury":
      console.log("[-7, 0, 1250 / cameraPosition]");
      break;
  }

  // setCurrentZoom(1250)
  // const position = [-7, 0, 1250 / cameraPosition]
  // return position
};

// const venusPositon = [0,0,_]
// const earthPositon = [0,0,_]
// const marsPositon = [0,0,_]
// const jupiterPositon = [0,0,_]
// const saturnPositon = [0,0,_]
// const uranusPositon = [0,0,_]
// const neptunePositon = [0,0,_]

export default getPlanetPositon;
