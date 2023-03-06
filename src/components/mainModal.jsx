import React from "react";
import "./mainModal.css";
import sendToPlanet from "../functions/sendToPlanet";


const Modal = () => {
  return (
    <div id="modal-main" className="modal">
      <div className="mainModal__container">
        <div className="mainModal__header">
          <h2 className="mainModal__title">
            Welcome to the Milky Way Galaxy!
          </h2>
          <p className="mainModal__para">
            Click on a planet to learn more about it.
          </p>
          <ul className="mainModal__planets">
            <li className="mainModal__planet" onClick={() => sendToPlanet("Mercury")}>Mercury</li>
            <li className="mainModal__planet">Venus</li>
            <li className="mainModal__planet">Earth</li>
            <li className="mainModal__planet">Mars</li>
            <li className="mainModal__planet">Jupiter</li>
            <li className="mainModal__planet">Saturn</li>
            <li className="mainModal__planet">Uranus</li>
            <li className="mainModal__planet">Neptune</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
