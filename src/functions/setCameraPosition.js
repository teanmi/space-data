import camera from "./camera";

const setCameraPosition = (position) => {
  const [x, y, z] = position;
  camera.position.setX(x);
  camera.position.setY(y);
  camera.position.setZ(z);
};

export default setCameraPosition;
