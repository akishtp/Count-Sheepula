import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Count Sheepula</p>
        <span>
          I'm <code>Baa</code>cula
        </span>
      </header>
    </div>
  );
}

export default App;
