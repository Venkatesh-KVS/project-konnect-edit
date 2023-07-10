import React from "react";
import DynamicImage from "../requiredPages/DynamicImage";

const SectionThree = () => {
  return (
    <>
      <div className="secThree container d-flex">
        <div className="secThree-img">
          {/* <img src={image.img} alt={image.title} /> */}
          <DynamicImage className="secThree-imgLeft" imageName={"img1.jpg"} />
        </div>

        <div className="secThree-info d-flex">
          <div className="sti secThree-info-one d-flex">
            <DynamicImage
              className="secThree-info-icon"
              imageName={"/icons/box.svg"}
            />
            <p>Guaranteed time slots</p>
          </div>
          <hr />
          <div className="sti secThree-info-two d-flex">
            <DynamicImage imageName={"/icons/Prescription.svg"} />

            <p>Temperature control sample movement and tracking </p>
          </div>
          <hr />
          <div className="sti secThree-info-two d-flex">
            <DynamicImage imageName={"/icons/box.svg"} />
            <p>Personalised sample Collection </p>
          </div>
          <hr />
          <div className="sti secThree-info-two d-flex">
            <DynamicImage imageName={"/icons/Prescription.svg"} />
            <p>Check our health packages </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
