import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg p-4">
      <Link className="navbar-brand" to="/">
        <BiSearchAlt className="mr-2" size="1.5em" />
        Images
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
