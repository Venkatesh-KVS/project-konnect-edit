import React from "react";
import { NavLink } from "react-router-dom";
import TestCard from "./TestCard";

const styles = {
  header: {
    backgroundImage: "url(./images/k-10.png)",
    height: "600px",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },

  //   content: {
  //     height: "100%",
  //     width: "100%",
  //     backgroundColor: "rgba(0, 0, 0, 0.5)",
  //     color: "white",
  //   },
};

const SectionFive = () => {
  return (
    <>
      <div className="secFive-bg" style={styles.header}>
        <div className="secFive container ">
          <div className="s5-bookAtest">
            <h2>Book a Tests</h2>
            <div className="s5-searchbox d-flex">
              <input className="s5-search" placeholder="Search" />
              <NavLink to={"/"}>
                <button className="s5-searchBtn">Search</button>
              </NavLink>
            </div>
          </div>
          <div className="cards d-flex">
            <TestCard />
            <TestCard />
            <TestCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
