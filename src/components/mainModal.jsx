import React from "react";
import "./mainModal.css";
import sendToPlanet from "../functions/sendToPlanet";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Modal = () => {
  return (
    <div id="modal-main" className="modal">
      <div className="modal__container" >
        <div className="modal__header">
          <h2 className="modal__title">Welcome to the Milky Way Galaxy!</h2>
          <p className="modal__para">
            Click on a planet to learn more about it.
          </p>
          <ul className="modal__planets">
            <li
              className="modal__planet"
              onClick={() => sendToPlanet("mercury")}
            >
              Mercury
            </li>
            <li className="modal__planet" onClick={() => sendToPlanet("venus")}>
              Venus
            </li>
            <li className="modal__planet" onClick={() => sendToPlanet("earth")}>
              Earth
            </li>
            <li className="modal__planet" onClick={() => sendToPlanet("mars")}>
              Mars
            </li>
            <li
              className="modal__planet"
              onClick={() => sendToPlanet("jupiter")}
            >
              Jupiter
            </li>
            <li
              className="modal__planet"
              onClick={() => sendToPlanet("saturn")}
            >
              Saturn
            </li>
            <li
              className="modal__planet"
              onClick={() => sendToPlanet("uranus")}
            >
              Uranus
            </li>
            <li
              className="modal__planet"
              onClick={() => sendToPlanet("neptune")}
            >
              Neptune
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
