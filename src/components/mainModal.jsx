import React from "react";
import "./mainModal.css";
import setCameraPosition from "../functions/setCameraPosition";

const Modal = () => {
  let cameraPosition = window.innerWidth >= 1250 ? 1250 : window.innerWidth;

  return (
    <div id="modal-main" className="modal">
      <div className="mainModal__container">
        <div className="mainModal__header">
          <h2 className="mainModal__title">
            <div
              className="test"
              onClick={() => setCameraPosition(-10, 0, 2500 / cameraPosition)}
            >
              sun
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
