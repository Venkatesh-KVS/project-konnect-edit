import { styled } from "styled-components";
import { Link } from "react-router-dom";
// import { TestCard, cardData } from "../requiredPages/TestCard";
import MyCarousel from "../requiredPages/Carousel";
// import DynamicImage from "../requiredPages/DynamicImage";

const RadiologyServices = () => {
  return (
    <Wrapper>
      <div className="banner-bg ">
        <div className="container banner">
          <h6>
            <span>
              <Link to="/">Home</Link>/<Link to="/services">Services</Link>
            </span>
            /Radiology Services
          </h6>
          <h2>Radiology Services</h2>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
      <div className="container ">
        <MyCarousel />
        {/* <div className="radiologuServices">
          <div className="tst-group d-flex">
            {cardData.map((card, index) => (
              <TestCard
                key={index}
                title={card.title}
                price={card.price}
                inv={card.inv}
                description={card.description}
              />
            ))}
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default RadiologyServices;

const Wrapper = styled.section`
  .tst-group {
    flex-wrap: wrap;
    gap: 1rem;
    margin: 50px auto;
  }
  .banner-bg {
    display: flex;
    align-items: center;
    /* text-align: center; */
    height: 20em;
    background: url("/project-konnect/images/radiology-services-banner.jpg");
    background-size: cover;
    .banner {
      /* width: 50%; */
      color: #fff;
      h2 {
        color: #00203c;
        font-weight: 800;
      }
      h6 {
        font-size: 0.9rem;
        font-weight: 600;
        color: #00203c;
        span {
          color: #00aeef;
          a {
            color: #00aeef;
            text-decoration: none;
          }
        }
      }
      p {
        color: #606060;
        width: 30%;
      }
    }
  }
  /* ---------------test cards */
  /*  */

  /* ---------------test cards */
`;
