import React, { useState } from "react";
import "./App.css";
import Timer from "./Timer";

import WordCard from "./WordCard";

function App() {
  const [isShown, setIsShown] = useState(false);
  const [ready, setReady] = useState("Click me to start!!");
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="game">
      <WordCard value="MSSPSU" />
      <button
        className="ready"
        onClick={() => {
          setReady("Game started");
          console.log("Game started and please enjoy ^^");
          handleClick()
        }}
      >
        {ready}
      </button>
      {isShown && <Timer />}
    </div>
  );
}

export default App;
