import React from "react";
import styled from "styled-components";

export const cardData = [
  {
    title: "HbA1c (Glycated Haemoglobin)",
    price: "Rs 2000/-",
    inv: "INV1663",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    title: "IHC ER/PR/HER2nu(BREAST PANEL)",
    price: "Rs 4000/-",
    inv: "INV1441",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    title: "HbA1c (Glycated Haemoglobin)",
    price: "Rs 2000/-",
    inv: "INV1663",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    title: "HbA1c (Glycated Haemoglobin)",
    price: "Rs 2000/-",
    inv: "INV1663",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    title: "IHC ER/PR/HER2nu(BREAST PANEL)",
    price: "Rs 4000/-",
    inv: "INV1441",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
];
export const TestCard = ({ title, price, inv, description }) => {
  return (
    <Wrapper>
      <div className="tstCards d-flex gap-2">
        <div className="tstsCard">
          <h6>{title}</h6>
          <h3>{price}</h3>
          <hr />
          <p className="para">
            <span>INVCODE:</span> {inv}
          </p>
          <p className="para">{description}</p>
          <hr />
          <button className="btn">Book Now</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tstCards {
    flex-wrap: wrap;
  }
  .tstsCard {
    background-color: #00aeef;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: #fff;
    border-radius: 15px;
    padding: 2rem;
    width: 22rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
    }
    h6 {
      font-size: 1rem;
    }
  }

  .btn {
    color: #fff;
    font-size: 0.8rem;
    width: 6rem;
    background-color: #005bab;
    justify-content: flex-end;
  }
  .para {
    color: #fff;
  }
`;
