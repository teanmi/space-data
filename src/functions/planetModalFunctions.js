const showPlanetModal = (planet) => {
  const planetModal = document.getElementById(`planetModal${planet}`);

  setTimeout(() => {
    planetModal.classList.add("fade-in");
  }, 1600);
};

const hidePlanetModal = (planet) => {
  const planetModal = document.getElementById(`planetModal${planet}`);

  planetModal.classList.remove("fade-in");
};

export { showPlanetModal, hidePlanetModal };
