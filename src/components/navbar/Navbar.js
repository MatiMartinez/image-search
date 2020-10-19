import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand p-4">
      <Link className="navbar-brand" to="/">
        <BiSearchAlt className="mr-2" size="1.5em" />
        Images
      </Link>

      <div className="navbar ml-auto">
        <ul className="navbar-nav">
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
