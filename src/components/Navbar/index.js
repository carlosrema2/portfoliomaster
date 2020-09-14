import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="navbar-brand">
        <h2>Carlos Reyes</h2> 
        <h5>VA, USA</h5> 
      </div>
      
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/home"
              className={ window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active" 
                : "nav-link"}
              // className = "disabled-link"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects"
                ? "nav-link active" 
                : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" 
                ? "nav-link active" 
                : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
