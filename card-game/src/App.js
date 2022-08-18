import React from "react";
import "./App.css";
import Timer from "./Timer";

import WordCard from "./WordCard";

function App() {
 return (
 <div className="game">
 <WordCard value="MSSPSU"/>
 <Timer />
 </div>
 );
}

export default App;
