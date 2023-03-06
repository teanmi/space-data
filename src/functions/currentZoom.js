const setCurrentZoom = (zoomAmount) => {
  currentZoom = zoomAmount
}

const getCurrentZoom = () => {
  return currentZoom;
}

let currentZoom = 12500 // starting value

export {setCurrentZoom, getCurrentZoom}