import React from "react";
import "./planetModals.css"


//fix when ready
const planets = [
  "Mercury",
  // "Venus",
  // "Earth",
  // "Mars",
  // "Jupiter",
  // "Saturn",
  // "Uranus",
  // "Neptune",
];

//add buttons to next planet, api stats, make visable
const PlanetModals = () => {
  return (
    <ul id="plantModals">
      {planets.map((planet, index) => {
        return (
          <li key={index}>
            <div className="modal planetModal">
              <div className="mainModal__container">
                <div className="mainModal__header">
                  <h2 className="mainModal__title">
                    {planet}
                  </h2>
                  <p className="mainModal__para">
                    
                  </p>
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
