import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/screen1">
          Screen1
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/screen2">
          Screen2
        </Link>
      </li>
    </ul>
  );
}
