const displayPlanetModal = (planet) => {
  const planetModal = document.getElementById(`planetModal${planet}`);

  setTimeout(() => {
    planetModal.classList.add("fade-in");
  }, 800);
};

export default displayPlanetModal;
