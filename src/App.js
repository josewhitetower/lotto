import React from "react";
import "./App.css";
import Lottery from "./components/Lottery";

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Lottery" numBalls={6} maxNum={10} />
    </div>
  );
}

export default App;
