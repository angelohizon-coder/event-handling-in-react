import React, { useState } from "react";

function App() {
  var [state, buttonState] = useState("Hello");
  var [color, colorState] = useState("white");

  var style = {
    backgroundColor: color
  };

  function changeButtonState() {
    return buttonState("Submitted");
  }

  function hover() {
    return colorState("black");
  }

  function defaultStyle() {
    return colorState("white");
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={changeButtonState}
        onMouseOver={hover}
        onMouseOut={defaultStyle}
        style={style}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
