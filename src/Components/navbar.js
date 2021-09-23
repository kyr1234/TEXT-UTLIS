import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function navbar({ mode, toggle }) {
  return (
    <div className="navbar">
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TEXTUTILS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input mx-3"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={toggle}
            />
            <label
              className="form-check-label  mx-3"
              htmlfor="flexSwitchCheckDefault"
            >
              ENABLE DARK MODE
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
