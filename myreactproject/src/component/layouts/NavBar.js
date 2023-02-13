import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              House
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/adduser">
              AddEmployee
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addimage">
              AddImage
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
