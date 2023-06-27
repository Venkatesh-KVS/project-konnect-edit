import { Link } from "react-router-dom";
import styled from "styled-components";
// import DynamicImage from "./requiredPages/DynamicImage";
import TestCard from "./homeComponents/TestCard";
import { GiHamburgerMenu, GiHeartOrgan } from "react-icons/gi";
import { HiOutlineFilter } from "react-icons/hi";
import { CiMenuKebab } from "react-icons/ci";
import { PiFaders } from "react-icons/pi";

const Tests = () => {
  return (
    <Wrapper className="tests">
      <div className="banner-bg ">
        <div className="container flex">
          <h2>Tests</h2>
          <h6>Home/Tests</h6>
        </div>
      </div>
      <div className="container tests-container d-flex">
        <div className="box-left ">
          <div className="categories box-mb">
            <h4 className="h4-style">Categories</h4>
            <Link className="active " to="/">
              <PiFaders />
              All
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Anemia"}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Bone"}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Cancer "}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {" Diabetes"}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Fever "}
            </Link>

            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Heart"}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Kidney "}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {" Liver"}
            </Link>
            <Link className="d-flex gap-1" to="/">
              <GiHeartOrgan />
              {"Pregnancy "}
            </Link>
          </div>
          <div className="Packages box-mb">
            <h4 className="h4-style">Packages</h4>
            <Link to="/">Bone </Link>
            <Link to="/">Cancer </Link>
            <Link to="/">Diabetes </Link>
            <Link to="/">Fever </Link>
          </div>
        </div>
        <div className="box-right">
          <div className="box-right-top">
            <div className="categories  d-flex justify-content-between align-items-center">
              <div className="">
                <HiOutlineFilter />
                <GiHamburgerMenu />
              </div>

              <h6>225 Total Tests</h6>

              <Link to="/">
                {"Menu Item"}
                <CiMenuKebab />
              </Link>
            </div>
          </div>
          <div className="box-right-bottom d-flex">
            <div className="box-mb ">
              {/* <h6>All</h6> */}
              <div className="tests-comp gap-2">
                <TestCard />
                <TestCard />
                <br />
                <TestCard />
                <TestCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tests;

const Wrapper = styled.section`
  .tests-comp {
    overflow: hidden;
  }
  .container {
    color: #fff;
    padding: 50px 0;
  }
  .tests-container {
    /* background-color: antiquewhite; */
    margin: 3rem auto;
    padding: 0;
    border-radius: 15px;
    gap: 0.5rem;
  }
  .tests-container a {
    size: 1rem;
    text-decoration: none;
    color: #00203c;
    display: flex;
    margin-top: 0.5rem;
  }
  .box-mb {
    margin-bottom: 1.5rem;
  }
  /* ---------------Categories */
  .Categories svg {
    background-color: red;
  }

  a.active {
    color: #005bab;
    font-weight: 600;
  }
  .active {
    color: red;
    position: relative;
  }
  .active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 20%;
    background-color: #005bab;
  }
  .h4-style {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
    color: #005bab;
  }
  .banner-bg {
    height: 15em;
    background: linear-gradient(
        0deg,
        rgba(0, 174, 239, 0),
        rgba(0, 32, 60, 0.6)
      ),
      url("/project-konnect/images/about-banner.jpg");
    background-size: cover;
  }
  .box-left {
    width: 20rem;
    height: 100%;
    background-color: #00aeef05;
    border-radius: 15px;
    padding: 2rem;
    /* border: 1px solid #005bab; */
    background: linear-gradient(
      180deg,
      rgba(0, 174, 239, 0.2),
      rgba(0, 91, 171, 0)
    );
  }

  .box-right {
    width: 100%;
    gap: 10;
    border-radius: 15px;
    padding: 0 1.5rem;
  }
  .box-right-top {
    padding: 1.5rem;
    /* background-color: #00aeef10; */
    background: linear-gradient(
      0deg,
      rgba(0, 91, 171, 0),
      rgba(0, 174, 239, 0.2)
    );
    border-radius: 15px;
  }
`;
