const getCameraPositionZModifier = () => {
  const cameraPosition = window.innerWidth >= 1250 ? 1250 : window.innerWidth;
  return cameraPosition
};

window.addEventListener("resize", () => getCameraPositionZModifier(), false);



export default getCameraPositionZModifier;
