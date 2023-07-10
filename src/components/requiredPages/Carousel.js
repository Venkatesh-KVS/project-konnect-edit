import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styled } from "styled-components";
import { TestCard } from "../requiredPages/TestCard";
import { testsData } from "../data/AllData";

const MyCarousel = () => {
  return (
    <Wrapper className="container">
      <Carousel
        className="car-container"
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop
        centerMode
        centerSlidePercentage={33.33}
        selectedItem={0}
        showArrows={true}
      >
        {testsData.map((card, index) => (
          <TestCard
            key={index}
            title={card.title}
            price={card.price}
            inv={card.inv}
          />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default MyCarousel;

const Wrapper = styled.section`
  .dot.selected {
    background-color: #005bab;
  }
  .control-arrow {
    /* display: none; */
    color: red;
    background-color: red;
  }
  .control-next {
    &::before {
      /* background-color: red; */
      color: #005bab;
      margin: 50px;
      &:hover {
        background-color: red;
      }
    }
    &:focus {
      /* background-color: red; */
    }
    button {
      border: 2px solid #005bab;
    }
  }
  .carousel-slider ul {
    /* background-color: red; */
  }
`;
