import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styled } from "styled-components";
import { TestCard, cardData } from "../requiredPages/TestCard";

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
      >
        {cardData.map((card, index) => (
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
    display: none;
  }
`;