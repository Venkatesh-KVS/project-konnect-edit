import React from "react";
import { Carousel } from "react-responsive-carousel";
import { styled } from "styled-components";

const OrganCarousel = ({ images }) => {
  return (
    <Wrapper>
      <Carousel
        style={{ width: "100%" }}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        centerMode
        centerSlidePercentage={1}
        selectedItem={0}
      >
        <div className="organs d-flex gap-3 flex-wrap ">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
              <p>{image.alt}</p>
            </div>
          ))}
        </div>
      </Carousel>
    </Wrapper>
  );
};

export default OrganCarousel;

const Wrapper = styled.section`
  .dot.selected {
    background-color: #005bab;
    cursor: progress;
  }
  .carousel-root {
    width: 100%;
    /* .control-arrow {
      display: none;
    } */
    .dot {
      color: red;
      border: 2px solid red;
    }
    .carousel .slider {
      padding: 0 25px 50px 25px;
      margin: 0 25px;
    }
  }
  .organs {
    img {
      width: 50px;
      margin: 10px;

      &:active p {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
    p {
      color: ${({ theme }) => theme.colors.text};
    }
    &:hover p {
      /* background-color: #005bab; */
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
