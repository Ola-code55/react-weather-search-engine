import React from "react";
import './App.css';
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather/>
      <footer>
        This project was coded by Olakusibe Animashaun and it is {""}
        <a href="https://github.com/Ola-code55/react-weather-search-engine" target="_blank">
          open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}


