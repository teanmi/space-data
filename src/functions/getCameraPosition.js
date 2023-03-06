const getCameraPosition = () => {
  const cameraPosition = window.innerWidth >= 1250 ? 1250 : window.innerWidth;
  return cameraPosition
};

window.addEventListener("resize", () => getCameraPosition(), false);



export default getCameraPosition;
