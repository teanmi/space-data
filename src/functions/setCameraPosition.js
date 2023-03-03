import camera from "./camera";

const setCameraPosition = (x,y,z) => {
  camera.position.setX(x)
  camera.position.setY(y)
  camera.position.setZ(z)
}

export default setCameraPosition;