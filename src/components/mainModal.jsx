import React from "react";
import "./mainModal.css";

const Modal = ({ score }) => {
  return (
    <div id="modal-main" className="modal">
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="modal__title">Click a Planet to go to!</h2>
          <p className="modal__para">Score: {score ? score : 0}</p>
          <button className="modal__button">
            Generate score tracker
          </button>
          <button className="modal__button">
            Insert score tracker
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
