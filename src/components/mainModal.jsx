import React from "react";
import "./mainModal.css";
import Nav from "./nav";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SvgIcon } from "@mui/material";

const Modal = () => {
  return (
    <div id="modal-main">
      <div className="mainModal__container">
        <Nav />
        <div className="mainModal__header">
          <h2 className="mainModal__title">
            Hello I'm Michael Telakowicz,
            <br />
            <br />
            <span>
              I'm a Frontend Developer who loves to be challenged. I enjoy
              designing unique websites that offers great user experience.
            </span>
          </h2>
          <p className="mainModal__para">
            Welcome to Portfolio Galaxy,
            <br />
            Here you can learn about me, see my projects, and get my contact
            info.
            <br />
            To start your journey, click the arrow in the bottom right
            corner. You can go back anytime by pressing the arrow in the bottom
            left corner.
            <br />
            Also if you would like to admire the solar system you can click the hide button at the bottom.
          </p>
        </div>
        <div className="modal__buttons">
          <div className="modalArrow__container modalArrow__container--right">
            <SvgIcon component={ArrowForwardIcon} className="modalArrow modalArrow-right" fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
