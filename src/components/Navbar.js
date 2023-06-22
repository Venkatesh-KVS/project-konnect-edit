import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg   ">
        <div className=" container d-flex justify-content-between">
          <ul className="navbar-lists navbar-nav d-flex">
            <li>
              <NavLink to="/" className="nav-list">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-list">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="nav-list">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="nav-list">
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="nav-list">
                Services
              </NavLink>
            </li>
          </ul>
          <div className="cart-icon">
            <NavLink to="/cart" className="nav-list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
