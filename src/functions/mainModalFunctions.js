const hideMainModal = () => {
  const mainModal = document.getElementById("modal-main");
  
  mainModal.classList.add("hide");
};

const showMainModal = () => {
  const mainModal = document.getElementById("modal-main");

  setTimeout(() => {
    mainModal.classList.remove("hide");
  }, 2300);
};

export { hideMainModal, showMainModal };
