import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sendToPlanet from "../functions/sendToPlanet";
import sendToHome from "../functions/sendToHome";
import "./planetModal.css";


const PlanetModal = ({ planets, planet, index, loading }) => {
  const planetName = planet.name[0].toUpperCase() + planet.name.slice(1);

  const planetDescription = planet.description;

  return (
    <li>
      <div id={`planetModal${planet.name}`} className="modal planetModal">
        <div className="modal__container">
          <div className="modal__header planetModal__header">
            <h2 className="modal__title">{planetName}</h2>
            <p className="modal__para planetModal__para">{planetDescription}</p>
          </div>
          <div className="modal__footer">
            {index !== 0 && (
              <div
                className="modal__footerButton modal__footerButton--back"
                onClick={() => sendToPlanet(planets[index - 1].name, planets[index].name)}
              >
                <ArrowBackIcon fontSize="large" />
              </div>
            )}
            <div
              className="modal__footerButton modal__footerButton--main"
              onClick={() => {
                sendToHome(planets[index].name);
              }}
            >
              <HomeIcon fontSize="large" />
            </div>
            {index !== planets.length - 1 && (
              <div
                className="modal__footerButton modal__footerButton--next"
                onClick={() => {
                  sendToPlanet(planets[index + 1].name, planets[index].name);
                }}
              >
                <ArrowForwardIcon fontSize="large" />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default PlanetModal;
