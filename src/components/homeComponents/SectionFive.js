import React from "react";
import TestCardSample from "./TestCardSample";

const styles = {
  header: {
    backgroundImage: "url(./images/k-10.png)",
    height: "100%",
    marginBottom: "0px",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
};

const SectionFive = () => {
  return (
    <>
      <div className="secFive-bg" style={styles.header}>
        <div className="secFive container ">
          <div className="s5-bookAtest">
            <h2>Health Packages</h2>
          </div>
          <div className="cards d-flex">
            <TestCardSample />
            <TestCardSample />
            <TestCardSample />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
