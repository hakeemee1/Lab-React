import React, {useState} from "react";
import "./App.css";
import Timer from "./Timer";

import WordCard from "./WordCard";

function App() {
    const [isShown, setIsShown] = useState(false);
    const [ready, setReady] = useState("Click me to start!!");
    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
      };
    
 return (
 <div className="game">
 <WordCard value="MSSPSU"/>
 <button className="ready" onClick={()=>{
    setReady("Game started");
    console.log("Game started and please enjoy ^^");
    
 }}>{ready}</button>
{isShown && <Timer />}
 </div>
 );
}

export default App;
