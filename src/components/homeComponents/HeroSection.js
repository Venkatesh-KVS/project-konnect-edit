import React from "react";
import DynamicImage from "../requiredPages/DynamicImage";
import { styled } from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper className="hero-sec container d-flex p-0 my-5 justify-content-between">
      <div className="hero-content align-self-center ">
        <h1 className="display-4 fw-bold ">
          Your
          <span className="span">partner</span>
          in <br />
          keeping you
          <span className="span">healthy</span>
        </h1>
        <div className="gyr my-4">
          Get Your
          <strong className="mx-2">Reports</strong>
          in<span className="mx-2">24</span>hours...
        </div>
        <div className="hero-packages d-flex gap-3">
          <div className="cohp d-flex mt-2">
            <DynamicImage imageName={"/icons/box-white.svg"} />
            <p className="cohp-btn btn px-2 p-2">Konnect Health Packages </p>
          </div>
          <div className="cohp d-flex mt-2">
            <DynamicImage imageName={"/icons/tests-icon-white.svg"} />
            <p className="cohp-btn btn px-2 p-2">Konnect Lifestyle Tests </p>
          </div>
          <div className="cohp d-flex mt-2">
            <DynamicImage imageName={"/icons/location-icon-white.svg"} />
            <p className="cohp-btn btn px-2 p-2">Konnect Locations </p>
          </div>
        </div>
        {/* <div className="book d-flex">
          <DynamicImage imageName={"/icons/calender.svg"} />
          <button className="book-btn btn px-2 p-2">Book an Appointment</button>
        </div> */}
      </div>
      <div className="hero-video d-flex">
        <video autoPlay loop muted controls={false}>
          <source src="/project-konnect/images/hero24.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.section`
  .hero-content {
    .span {
      color: #005bab;
      margin: 0 10px 0 10px;
    }
    h1 {
      font-family: "Josefin Sans", sans-serif;
      color: #00aeef;
    }
    .hero-packages {
      /* background-color: red; */
      flex-wrap: wrap;
    }
  }

  .gyr {
    width: 23ch;
    border-right: 1px solid #005bab;
    overflow: hidden;
    white-space: nowrap;
    color: #00aeef;

    font-size: 1.3rem;
    line-height: 1.3;
    animation: typing 3s steps(18), blink 0.4s step-end infinite alternate;
    strong,
    span {
      color: #005bab;
      font-weight: 700;
      /* font-family: "Josefin Sans", sans-serif; */
    }
    @keyframes typing {
      from {
        width: 0;
      }
    }
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  }
  /* .cohp:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -26px;
    right: -26px;
    background: #00aeef;
    height: 52px;
    width: 52px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  } */
  .cohp {
    background-color: #005bab;
    /* border: 1px solid #005bab; */
    align-items: center;
    padding: 8px 28px;
    border-radius: 4px;
    .cohp-btn {
      color: #fff;
      /* color: #00aeef; */
      font-size: 1rem;
      vertical-align: center;
      margin-bottom: 0;
    }
    img {
      width: 30px;
    }
  }
  .hero-sec {
    justify-content: space-between;
  }

  video {
    width: 28rem;
  }
  /* .hero-line-2 {
    text-align: center;
    align-items: center;
  } */
  /* .hero-line-2-icon {
    padding: 5px 8px;
    border: 2px solid #005bab;
    border-radius: 100px;
    margin: 10px;
  } */
  /* .hero-line-2-icon path {
    border: 2px solid #005bab;
    color: #005bab;
  } */
  /* .hero-line-2-text {
    font-size: 1rem;
    font-weight: 500;
    color: #005bab;
  }

  .hero-sec {
    gap: 50px;
  } */
`;
