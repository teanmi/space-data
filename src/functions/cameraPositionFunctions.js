import camera from "./camera";

const setCameraPosition = (position) => {
  const [x, y, z] = position;
  camera.position.setX(x);
  camera.position.setY(y);
  camera.position.setZ(z);
};

const getCameraPosition = () => {
  return [camera.position.x, camera.position.y, camera.position.z];
};

export { setCameraPosition, getCameraPosition };
