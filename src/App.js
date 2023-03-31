import "./App.css";
import freecodecampLogo from "./image/freecodecamp-logo.png";
import Button from "./component/Button";
import Contador from "./component/Contador";
import { useState } from "react";

function App() {
  const [numClick, setNumClick] = useState(0);
  //0 es el valor inicial del numClick
  const handlerClick = () => {
    setNumClick(numClick + 1);
  };

  const resetCounter = () => {
    setNumClick(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodecampLogo}
          alt="Logo de Freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClick={numClick} />
        <Button text="Click" isButtonClick={true} handlerClick={handlerClick} />
        <Button
          text="Reiniciar"
          isButtonClick={false}
          handlerClick={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
