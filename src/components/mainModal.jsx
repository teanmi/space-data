import React from "react";
import "./mainModal.css";
import sendToPlanet from "../functions/sendToPlanet";

const Modal = () => {
  return (
    <div id="modal-main" className="modal">
      <div className="mainModal__container">
        <div className="mainModal__header">
          <h2 className="mainModal__title">Welcome to the Milky Way Galaxy!</h2>
          <p className="mainModal__para">
            Click on a planet to learn more about it.
          </p>
          <ul className="mainModal__planets">
            <li
              className="mainModal__planet"
              onClick={() => sendToPlanet("mercury")}
            >
              Mercury
            </li>
            <li
              className="mainModal__planet"
              onClick={() => sendToPlanet("venus")}
            >
              Venus
            </li>
            <li
              className="mainModal__planet"
              onClick={() => sendToPlanet("earth")}
            >
              Earth
            </li>
            <li
              className="mainModal__planet"
              onClick={() => sendToPlanet("mars")}
            >
              Mars
            </li>
            <li
              className="mainModal__planet"
              onClick={() => sendToPlanet("jupiter")}
            >
              Jupiter
            </li>
            <li
              className="mainModal__planet"
              onClick={() => sendToPlanet("saturn")}
            >
              Saturn
            </li>
            <li
              className="mainModal__planet"
              onClick={() => sendToPlanet("uranus")}
            >
              Uranus
            </li>
            <li
              className="mainModal__planet"
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
