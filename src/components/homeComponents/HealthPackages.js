import React from "react";
import HpCard from "../requiredPages/HpCard";
import { packagesData } from "../data/AllData";
import styled from "styled-components";

const HealthPackages = () => {
  return (
    <Wrapper>
      <div className="secFour-info d-flex">
        <h2>Health Packages</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="container flex-wrap ">
        <div className="hpCards d-flex justify-content-between m-3 flex-wrap gap-3">
          {packagesData.map((item, index) => (
            <HpCard
              key={index}
              title={item.title}
              price={item.price}
              code={item.code}
              desc={item.desc}
              info={item.temInfo}
              item={item}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default HealthPackages;

const Wrapper = styled.section`
  .hpCards {
  }
`;
