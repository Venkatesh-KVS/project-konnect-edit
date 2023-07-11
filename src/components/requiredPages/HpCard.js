import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "react-use-cart";
import { BsCurrencyRupee } from "react-icons/bs";

const HpCard = (props) => {
  const { addItem } = useCart();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const changeText = (text) => {
    setButtonText(text);
  };

  return (
    <Wrapper>
      <div
        className="hpCard-container d-flex p-0 border "
        style={{ width: "100%" }}
      >
        <div className="hpCard rounded w-100 ">
          <div className="hpTitle-box d-flex justify-content-between align-items-center gap-3 rounded-top px-3">
            <h5 className="hpTitle d-flex gap-2 py-3 m-0 ">
              <img
                src="/project-konnect/images/icons/k.svg"
                alt="k"
                style={{ width: "32px" }}
              />
              {props.title}
            </h5>
            <p className="hpCode px-2 rounded m-0 d-flex align-center">
              Code: {props.code}
            </p>
          </div>
          <div className="hpInfo-box rounded-bottom d-flex flex-column justify-content-between">
            <div>
              <p className="hpDesc flex flex-wrap" style={{ width: "300px" }}>
                {props.desc}
              </p>
              <p className="hpMoreInfo">{props.moreInfo}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="hpPrice m-0">
                <BsCurrencyRupee /> {props.price}
              </h6>
              <button
                className="hpBtn btn"
                onClick={() => {
                  addItem(props.item);
                  changeText("Added to Cart");
                }}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HpCard;

const Wrapper = styled.section`
  .hpCard-container {
    .hpTitle-box {
      height: 80px;
      background-color: ${({ theme }) => theme.colors.secondary};
      .hpTitle {
        font-size: 1.125rem;
        color: ${({ theme }) => theme.colors.white};
      }
      .hpCode {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        font-size: 15px;
        font-weight: 600;
        align-items: center;
        text-align: center;
      }
    }
    .hpPrice {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.25rem;
      font-weight: 700;
    }
    .hpInfo-box {
      padding: 20px;
      height: 180px;
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      background-image: url("project-konnect/images/k-10.png");
      background-repeat: no-repeat;
      background-size: 150px;
      background-position: center left;
    }
    .hpBtn {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
