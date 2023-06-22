import React from "react";
import TestCard from "./TestCard";

const SectionFour = () => {
  return (
    <>
      <div className="secFour container ">
        <div className="secFour-info d-flex">
          <h2>Popular Tests / Packages</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="cards d-flex">
          <TestCard />
          <TestCard />
          <TestCard />
        </div>
      </div>
    </>
  );
};

export default SectionFour;
