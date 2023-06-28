import React from "react";
import DynamicImage from "./requiredPages/DynamicImage";
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
            </NavLink>
          </div>
          <div className="register d-flex">
            <div>
              <button className="butn signup-button d-flex gap-1" onClick={"/"}>
                SignUp
                <DynamicImage imageName={"/icons/signup.svg"} />
              </button>
            </div>
            <button className="butn login-button" onClick={"/"}>
              Login
            </button>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
