import React from "react";
import "./Button.css";
function Button({ text, isButtonClick, handlerClick }) {
  return (
    <button
      className={isButtonClick ? "boton-click" : "boton-reiniciar"}
      onClick={handlerClick}
    >
      {text}
    </button>
  );
}

export default Button;
