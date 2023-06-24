import React from "react";
const imag = {
  calender: "konnect-app/icons/calender.svg",
  box: "/konnect-app/icons/box.svg",
};

const HeroSection = () => {
  return (
    <div className="hero-sec container d-flex p-0 my-5 ">
      <div className="hero-content align-self-center ">
        <h1 className="display-4 fw-bold ">
          Keeping a tab
          <span className="span">
            on your <br />
            Health can go
          </span>
          along way
        </h1>

        <div className="cohp d-flex my-4 mt-5">
          <img className="cohp-img" src={imag.box} alt="icon" />
          <h3 className="cohp-btn btn px-2 p-2">Check Our Health Packages</h3>
        </div>
        <div className="book d-flex">
          <img className="book-img" src={imag.calender} alt="icon" />
          <button className="book-btn btn px-2 p-2">Book an Appointment</button>
        </div>
      </div>
      <div className="hero-video d-flex">
        <video autoPlay loop muted controls={false}>
          <source src="/konnect-app/images/hero24.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="gyr my-4">
          <strong className="mx-2">Get Your Reports</strong>
          in <span className="mx-2">24 Hours</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
