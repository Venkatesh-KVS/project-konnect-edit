import React from "react";
import DynamicImage from "./DynamicImage";

import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header ">
        <div className="top-nav container d-flex justify-content-between">
          <div className="logo">
            <NavLink to={"/"}>
              <DynamicImage imageName={"konnect-logo.png"} width={300} />
              {/* <img src="./images/konnect-logo.PNG" alt="k-Logo" width={200} /> */}
            </NavLink>
          </div>
          <div className="register d-flex">
            <button className="butn login-button" onClick={"/"}>
              Login
            </button>
            <button className="butn signup-button" onClick={"/"}>
              SignUp
            </button>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;

/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */
