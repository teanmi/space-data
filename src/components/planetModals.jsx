import React from "react";
import "./planetModals.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sendToPlanet from "../functions/sendToPlanet";

const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

//add buttons to next planet, api stats, make visable
// add hide planet modal in onClick Events
const PlanetModals = () => {
  return (
    <ul id="plantModals">
      {planets.map((planet, index) => {
        const planetName = planet[0].toUpperCase() + planet.slice(1);
        return (
          <li key={index}>
            <div id={`planetModal${planet}`} className="modal planetModal">
              <div className="modal__container">
                <div className="modal__header">
                  <h2 className="modal__title">{planetName}</h2>
                  <p className="modal__para"></p>
                </div>
                <div className="modal__footer">
                  {index !== 0 && (
                    <div
                      className="modal__footerButton modal__footerButton--back"
                      onClick={() => sendToPlanet(planets[index - 1])}
                    >
                      <ArrowBackIcon fontSize="large" />
                    </div>
                  )}
                  <div className="modal__footerButton modal__footerButton--main">
                    <HomeIcon fontSize="large" />
                  </div>
                  {index !== planets.length - 1 && (
                    <div
                      className="modal__footerButton modal__footerButton--next"
                      onClick={() => {
                        sendToPlanet(planets[index + 1]);
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
      })}
    </ul>
  );
};

export default PlanetModals;
