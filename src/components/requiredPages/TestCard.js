import React from "react";
import styled from "styled-components";

export const cardData = [
  {
    title: "HbA1c (Glycated Haemoglobin)",
    price: 2000,
    inv: "INV1663",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    title: "IHC ER/PR/HER2nu(BREAST PANEL)",
    price: 4000,
    inv: "INV1441",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    title: "HbA1c (Glycated Haemoglobin)",
    price: 2000,
    inv: "INV1663",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    title: "IHC ER/PR/HER2nu(Breast panel) + Ki-67",
    price: 5000,
    inv: "INV2408",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    title: "10X300 SWAB C/S",
    price: 3000,
    inv: "INV1441",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    title: "17-Ketosteroids",
    price: 1700,
    inv: "INV3",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
];
export const TestCard = ({ title, price, inv }) => {
  return (
    <Wrapper>
      <div className="tstCards d-flex gap-2">
        <div className="tstsCard w-100">
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>

          <div className="w-100">
            <h5 className="tstTitle">{title}</h5>
            <p className="tstInv">
              INVCODE:<b> {inv} </b>
            </p>
          </div>

          <div className="d-flex w-100 justify-content-between align-items-center border-top pt-3">
            <h6 className="mb-0 tstPrice">RS {price}</h6>
            <button className="txtcartBtn btn">
              Add to Cart
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tstCards {
    flex-wrap: wrap;
    text-align: left;
    /* margin: 25px 0 50px 0; */
    background-color: #fff;
    border: 2px solid #00aeef;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    color: #fff;
    border-radius: 4px;
    padding: 2rem;
    width: 22rem;
    overflow: hidden;
    position: relative;
    z-index: 0;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #00aeef;
    border-radius: 0 4px 0 32px;
  }
  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }
  .tstCards:before {
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
  }
  .tstCards:hover:before {
    transform: scale(21);
  }

  .tstsCard {
    width: 100;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .tstTitle {
      font-size: 1.25rem;
      font-weight: 800;
      line-height: 1.6reem;
    }
    .tstInv {
      color: #b3b3b3;
      font-weight: 400;
      font-size: 0.8rem;
    }
    .tstPrice {
      color: #00203c;
      font-weight: 900;
      font-size: 1.2rem;
    }
    .tstCards:hover .tstPrice {
      color: white;
    }
  }

  .txtcartBtn {
    color: #005bab;
    font-size: 0.8rem;
    width: 6rem;
    border: 1px solid #005bab;
    justify-content: flex-end;
  }
  .txtcartBtn:hover {
    background-color: #005bab;
    color: white;
  }

  .para {
    color: #fff;
  }

  .tstCards:hover .tstTitle,
  .tstCards:hover .tstInv {
    color: white;
  }
`;
