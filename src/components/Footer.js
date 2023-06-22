import React from "react";
import { NavLink } from "react-router-dom";
import DynamicImage from "./DynamicImage";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-head">
          <div className="fh container d-flex justify-content-between">
            <div className="fh-content d-flex ">
              <p className="fh-p">Follow Konnect Diagnostics on Social Media</p>
              <NavLink>
                <DynamicImage imageName={"/icons/fb.svg"} />
              </NavLink>
              <NavLink>
                <DynamicImage imageName={"/icons/twitter.svg"} />
              </NavLink>
              <NavLink>
                <DynamicImage imageName={"/icons/instagram.svg"} />
              </NavLink>
              <NavLink>
                <DynamicImage imageName={"/icons/linkedin.svg"} />
              </NavLink>
            </div>
            <div className="fh-content d-flex">
              <NavLink className="fh-nl d-flex">
                <DynamicImage imageName={"/icons/Email.svg"} />
                <p className="fh-nl-p">Subscribe to our email newsletter</p>
                <DynamicImage
                  className="fh-nl-arrow"
                  imageName={"/icons/right-arrow.svg"}
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="footer-container container d-flex">
          <div className="footer-box1">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
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
          </div>
          <div className="footer-box2">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
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
          </div>
          <div className="footer-box3">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
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
          </div>
          <div className="footer-box4">
            <ul className="navbar-nav footer-navbar-lists  d-flex">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
