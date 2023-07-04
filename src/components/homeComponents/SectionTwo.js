import React, { useState } from "react";
import { styled } from "styled-components";
import { BsFilter, BsSearch } from "react-icons/bs";
import AtoZ from "../requiredPages/AtoZ";
import OrganCarousel from "../requiredPages/OrganCarousel";
import { cardData, TestCard } from "../requiredPages/TestCard";
import { organImages } from "../data/AllData";

const blogs = [
  { id: 1, title: "" },
  // Add more blog objects as needed
];

const SectionTwo = () => {
  const [search, setSearch] = useState("");
  return (
    <Wrapper>
      <div className="s2">
        <div className="s2-tests-box">
          <div className="s2-container container">
            <div className="d-flex gap-3 justify-content-between">
              <div className="s2-konnect">Konnect Tests</div>
              <div className="s2-konnect">Konnect Health Packages</div>
              <div className="s2-konnect">Konnect Life Tests</div>
              <div className="s2-konnect">Konnect Locations</div>
            </div>
          </div>
        </div>
        <div
          className="s2-tests-container container"
          style={{
            background: `url("project-konnect/images/k-10.png")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            padding: "25px",
          }}
        >
          <div className="s2-filter-box d-flex gap-4">
            <div className="filter d-flex gap-2">
              <BsFilter />
              <select className="filter">
                <option>Filter by Category</option>
                <option>Test Category one</option>
                <option>Test Category one</option>
                <option>Test Category one</option>
              </select>
            </div>

            <div className="a-z-search d-flex flex-fill">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search A-Z / Search by Organ"
              />
              <BsSearch />
            </div>
          </div>
          <div className="s2-selection-box d-flex gap-2">
            <div className="s2-aToz d-flex">
              <AtoZ blogs={blogs} />
            </div>
            <div className="s2-organs d-flex">
              <OrganCarousel images={organImages} />
            </div>
          </div>
          <div className="results d-flex flex-wrap gap-3 justify-content-center">
            {cardData
              .filter((card) => {
                return search.toLowerCase() === ""
                  ? card
                  : card.title.toLowerCase().includes(search);
              })
              .map((card, index) => (
                <TestCard
                  key={index}
                  title={card.title}
                  price={card.price}
                  inv={card.inv}
                />
              ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTwo;

const Wrapper = styled.section`
  .book-test {
    margin-top: -5rem;
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 20vw;
    border-radius: 50px 50px 0 0;
    padding: 10px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    h2 {
      font-size: 32px;
      font-weight: 600;
    }
  }
  .s2 {
    margin-bottom: 100px;
  }
  .s2-tests-box {
    font-weight: 500;
    background: ${({ theme }) => theme.colors.primary};
    /* height: 90px; */
  }
  .s2-konnect {
    background-color: ${({ theme }) => theme.colors.white};
    margin: 10px 0;
    padding: 8px 32px;
    border-radius: 5px;
  }
  /* ----------------------- filter: --------------- */

  .s2-filter-box {
    align-items: center;

    .filter {
      /* width: 300px; */
    }
    .a-z-search {
      background-color: ${({ theme }) => theme.colors.primary};
      padding: 2px 10px;
      align-items: center;
      svg {
        width: 10%;
        fill: ${({ theme }) => theme.colors.white};
      }
    }
    svg {
      width: 20px;
      height: 20px;
      fill: ${({ theme }) => theme.colors.text};
    }
    select {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      border: none;
    }
    input {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      font-size: 15px;
      padding: 5px 25px;
      width: 100%;
    }
  }
  .s2-tests-container {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 0 0 1rem 1rem;
    padding-bottom: 100px;
  }
  /* ---------------------- */
  .s2-selection-box {
    margin: 25px auto;
    .s2-aToz {
      width: 50%;
    }
    .s2-organs {
      width: 100%;
    }
  }
  .carousel-root {
    width: 100%;
    .dot {
      color: red;
      border: 2px solid red;
    }
    .carousel .slider {
      /* padding: 50px; */
    }
  }
  /* .results {
    background-color: #fff;
    padding: 50px;
    border-radius: 25px;
  } */
`;
