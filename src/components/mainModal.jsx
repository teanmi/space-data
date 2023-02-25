import React from "react";
import "./mainModal.css";
import Nav from "./nav";

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
              I am a Frontend Developer who loves to be challenged by designing
              unique user interfaces that offers great user experience!
            </span>
          </h2>
          <p className="mainModal__para">
            Welcome to Portfolio Galaxy,
            <br />
            Here you can learn about me, see my projects, and contact me.
            <br />
            To start your journey, click the arrow in the bottom right corner. 
            You can go back anytime by pressing an arrow that will appear in the bottom left corner.
            <br />
            Also if you would like to admire the planets press the hide button.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
