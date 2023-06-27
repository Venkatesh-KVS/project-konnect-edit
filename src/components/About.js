import { styled } from "styled-components";
import DynamicImage from "./requiredPages/DynamicImage";

const About = () => {
  return (
    <Wrapper className="about">
      <div className="banner-bg ">
        <div className="container flex">
          <h2>About</h2>
          <h6>Home/about</h6>
        </div>
      </div>
      <div className="sec sec-1 container flex flex-r">
        <div className="sec-left ">
          <h3 className="paraH3">We Care About Your Health</h3>
          <div className="para-section flex">
            <p className="para">
              Konnect Diagnostics embarked on its journey in October 2019 with a
              single center located in Kompally. Since its inception, the
              company has rapidly expanded its reach and made significant
              strides in the diagnostics industry. In a remarkable achievement,
              Konnect Diagnostics ac quired the Jagityal center, a strategic
              move that resulted in an impressive... revenue growth of nearly
              three times within a year,...,...
            </p>
            <p className="para">
              This milestone demonstrated the company's strong management and
              commitment to success. Building upon this success, Konnect
              Diagnostics set out to implement its visionary plan of
              establishing a comprehensive network of diagnostic centers spans
              across urban and rural areas, establishing centers from BN Reddy
              Nagar and Boduppal in urban regions to Suryapet and Sircilla in
              rural areas. By recognizing the importance of accessibility to
              quality healthcare services, the company aims to bridge the gap
              between urban and rural populations, ensuring that comprehensive
              diagnostics are available to all.
            </p>
            <p className="para">
              Konnect Diagnostics remains dedicated to delivering accurate and
              reliable diagnostic solutions while continuously expanding its
              footprint across diverse locations. With a focus on innovation,
              customer satisfaction, and community well-being, the company
              strives to make a positive impact on healthcare accessibility and
              contribute to the overall well-being of individuals and
              communities.
            </p>
          </div>
        </div>
        <div className="img-box ">
          <DynamicImage
            className="secThree-imgLeft"
            imageName={"about-1.jpg"}
          />
        </div>
      </div>
      {/* -----------------------------Section Two------------------------------ */}
      <div className="sec sec-2 container flex flex-r">
        <div className="img-box ">
          <DynamicImage imageName={"about-2.jpg"} />
        </div>
        <div className="sec-left ">
          <h3 className="paraH3">Why Konnect Diagnostics</h3>
          <div className="flex para-section">
            <p className="para para-box flex flex-r ">
              <DynamicImage imageName={"/icons/box.svg"} />
              At Konnect Diagnostics, we have assembled a team of certified and
              qualified professionals, including radiologists, pathologists,
              doctors, and technicians. Their expertise in various
              specializations allows us to deliver accurate and reliable
              diagnostic solutions.  
            </p>
            <p className="para para-box flex flex-r ">
              <DynamicImage imageName={"/icons/box.svg"} />
              We strive to stay at the forefront of the industry by embracing
              the latest technologies and advancements. Our commitment to
              excellence extends to our team of skilled technicians and
              professionals who are equipped to handle the most complex
              diagnostic procedures.   
            </p>
            <p className="para para-box flex flex-r ">
              <DynamicImage imageName={"/icons/box.svg"} />
              Patient satisfaction is our top priority, and we aim to deliver
              high-quality services tailored to your convenience. We prioritize
              efficiency, offering quick turnaround times without compromising
              on transparency and accuracy.     
            </p>
          </div>
        </div>
      </div>
      {/* -----------------------------Section three------------------------------ */}
      <div class="sec-m s3">
        <div className="container s3-info">
          <h2>Accreditations & Approvals</h2>
          <div className="s3-boxes flex flex-r">
            <div className="s3-box s3-box1 flex flex-r">
              <DynamicImage imageName={"nabl-logo.jpg"} />
              <div className="s3-box-1-info">
                <h4>NABL Certification</h4>
                <p className="para">
                  Konnect Diagnostics takes great pride in being a NABL
                  certified laboratory. This prestigious certification
                  underscores our dedication to meeting the highest standards of
                  quality in diagnostic care.
                </p>
              </div>
            </div>
            <div className="s3-box s3-box2 flex flex-r">
              <DynamicImage imageName={"icmr-logo.jpg"} />
              <div className="s3-box-2-info">
                <h4>ICMR Approval</h4>
                <p className="para">
                  Konnect Diagnostics is recognized and approved by the Indian
                  Council of Medical Research (ICMR). This recognition further
                  solidifies our commitment to providing comprehensive health
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------Section three------------------------------ */}
      <div class="sec-m s4 container flex flex-r">
        <div className=" s4-info">
          <span className="">Founder -----</span>
          <h3>Dr. Mahesh Rao</h3>
          <p className="para">
            At Konnect Diagnostics, our team is led by the visionary founder,
            Dr. Mahesh Rao. With 15 years of experience as an orthopedic surgeon
            and expertise in the diagnostic business, Dr. Rao has played a
            pivotal role in shaping our organization. Driven by a passion for
            providing quality-focused and affordable diagnostic services, Dr.
            Rao envisioned a diagnostic chain that not only catered to the
            lucrative markets but also reached the underserved semi-urban and
            rural areas of India. His goal was to make high-quality diagnostics
            accessible to everyone, regardless of their geographical location.
          </p>
        </div>
        <div className=" s4-img">
          <DynamicImage imageName={"mahesh-rao.png"} />
        </div>
      </div>
      <div className="sec-m s5 container flex flex-r">
        <div className=" s5-box s5-box1 ">
          <div className=" s5-img">
            <DynamicImage imageName={"/icons/box.svg"} />
          </div>
          <div className=" s5-txt">
            <p className="para">
              At Konnect Diagnostics, our team is led by the visionary founder,
              Dr. Mahesh Rao. With 15 years of experience as an orthopedic
              surgeon and expertise in the diagnostic business, Dr. Rao has
              played a pivotal role in shaping our organization. Driven by a
              passion for providing quality-focused and affordable diagnostic
              services, Dr. Rao envisioned a diagnostic chain that not only
              catered to the lucrative markets but also reached the underserved
              semi-urban and rural areas of India.
            </p>
          </div>
        </div>
        <div className=" s5-box s5-box2 ">
          <div className=" s5-img">
            <img src="./icons/box.svg" alt="icon" width={50} />
          </div>
          <div className=" s5-txt">
            <p className="para">
              At Konnect Diagnostics, our team is led by the visionary founder,
              Dr. Mahesh Rao. With 15 years of experience as an orthopedic
              surgeon and expertise in the diagnostic business, Dr. Rao has
              played a pivotal role in shaping our organization. Driven by a
              passion for providing quality-focused and affordable diagnostic
              services, Dr. Rao envisioned a diagnostic chain that not only
              catered to the lucrative markets but also reached the underserved
              semi-urban and rural areas of India. His goal was to make
              high-quality diagnostics accessible to everyone, regardless of
              their geographical location.
            </p>
          </div>
        </div>
        <div className=" s5-box s5-box3 ">
          <div className=" s5-img">
            <img src="./icons/box.svg" alt="icon" width={50} />
          </div>
          <div className=" s5-txt">
            <p className="para">
              At Konnect Diagnostics, our team is led by the visionary founder,
              Dr. Mahesh Rao. With 15 years of experience as an orthopedic
              surgeon and expertise in the diagnostic business, Dr. Rao has
              played a pivotal role in shaping our organization. Driven by a
              passion for providing quality-focused and affordable diagnostic
              services, Dr. Rao envisioned a diagnostic chain that not only
              catered to the lucrative markets but also reached the underserved
              semi-urban and rural areas of India. His goal was to make
              high-quality diagnostics accessible to everyone, regardless of
              their geographical location.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  .para-section {
    gap: 15px;
  }
  .sec-m {
    margin-bottom: 5rem;
  }
  .container {
    color: #fff;
    padding: 50px 0;
  }
  .flex {
    display: flex;
    flex-direction: column;
  }
  .banner-bg {
    height: 15em;
    background: linear-gradient(
        0deg,
        rgba(0, 174, 239, 0),
        rgba(0, 32, 60, 0.6)
      ),
      url("/project-konnect/images/about-banner.jpg");
    background-size: cover;
  }
  .flex-r {
    flex-direction: row;
  }
  .img-box img {
    width: 30rem;
    border-radius: 1rem;
    margin-bottom: 10rem;
  }
  .img-box {
    padding: 0 50px;
    background: url("/project-konnect/images/sec1-bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .sec {
    gap: 50px;
    overflow: hidden;
  }
  .para-box {
    gap: 1.5rem;
  }
  .para img {
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 100%;
    padding: 1rem;
    gap: 20px;
    width: 65px;
  }

  /* -----------------------------Section three------------------------------ */
  .s3 {
    background-color: #00aeef;
    margin-top: 2rem;
    height: 250px;
    h2 {
      text-align: center;
    }
  }
  .s3-boxes {
    gap: 3rem;
    justify-content: center;
  }
  .s3-box {
    background-color: #fff;
    padding: 25px;
    margin: 25px 0 0 0;
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 30rem;
    gap: 20px;
  }
  .s3-box img {
    width: 120px;
  }
  .s3-box h4 {
    font-size: 1.2rem;
    font-weight: 900;
  }

  /* -----------------------------Section Four------------------------------ */

  .s4 {
    margin-top: 50px;
    height: 300px;
    justify-content: center;
    align-items: center;
    margin-top: 15rem;
  }
  .s4-info {
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 2;
    padding: 100px 50px;
  }
  .s4 img {
    margin: 5rem 2rem 0;
    margin-top: -100px;
  }
  .s4-img {
    background-color: #00aeef25;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* height: 100%; */
    border-radius: 0 15px 15px 0;
  }

  /* -----------------------------Section Five------------------------------ */

  .s5 {
    justify-content: center;
    img {
      background-color: #fff;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      border-radius: 100%;
      padding: 1rem;
      margin-bottom: 25px;
      width: 65px;
    }
  }
  .s5-box {
    width: 50%;
    justify-content: center;
  }
  .s5-box1 {
    padding-right: 3rem;
  }
  .s5-box3 {
    padding-left: 3rem;
  }
  .s5-box2 {
    border-left: 2px solid #00aeef;
    border-right: 2px solid #00aeef;
    padding: 0 3rem;
  }
  .s5-box p {
    padding-top: 1rem;
    color: #606060;
  }
`;
