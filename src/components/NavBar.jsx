import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar(props) {
  const [open, setOpen] = useState();

  const handlePress = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Music Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handlePress}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={"collapse navbar-collapse" + (open ? " show" : "")}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalogue-search">
                Catalogue Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search-results">
                Search Results
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/insert-data">
                Insert Data
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
