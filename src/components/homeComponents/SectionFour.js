import React from "react";
import MyCarousel from "../requiredPages/Carousel";

const SectionFour = () => {
  return (
    <>
      <div className="secFour container ">
        <div className="secFour-info d-flex">
          <h2>Popular Tests </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="cards d-flex">
          <MyCarousel />
        </div>
      </div>
    </>
  );
};

export default SectionFour;
