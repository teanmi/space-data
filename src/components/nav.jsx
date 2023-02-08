import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav id="nav">
      <div className="row">
        <div className="left">
          <h3 className="nav__logo">M|T</h3>
        </div>
        <div className="right">
          <ul className="nav__links">
            <li className="nav__link nav__linkEffect"><a href="#about">About</a></li>
            <li className="nav__link nav__linkEffect"><a href="#projects">Projects</a></li>
            <li className="nav__link nav__linkBtn"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
