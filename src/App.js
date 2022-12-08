import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Quadratic from "./components/Quadratic";
// import Cubic from "./components/Cubic";
import Two from "./components/Two";
import Three from "./components/Three";

function App() {
  const [formula, setFormula] = useState("select");
  
  const changeHandle = (event) => {
    setFormula(event.target.value);
  };
  
  
  let disp = null;
  
  if (formula === "Quadratic Formula") {
    disp = <Quadratic />;
  } else if (formula === "2D Distance") {
    disp = <Two />;
  } else if (formula === "3D Distance") {
    disp = <Three />
  } else if (formula === "select") {
    disp = null;
  } else {
    disp = <div>Something went wrong!</div>
  }
  
 
  return (
    <div
      style={{
        padding: "16px",
        margin: "16px",
      }}
    >
      <form>
        <div>
           <Dropdown change={changeHandle}></Dropdown>
        </div>
        <div>
          {disp}
        </div>
      </form>
    </div>
  );

}

export default App;
