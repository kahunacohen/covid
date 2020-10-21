import React from "react";
import "./index.css";

export function Header() {
  return (
    <header className="App-header">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Screen 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Screen 2
          </a>
        </li>
      </ul>
    </header>
  );
}
