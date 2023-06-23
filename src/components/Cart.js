import React from "react";
import DynamicImage from "./requiredPages/DynamicImage";

const Cart = () => {
  const imageName = "k-10.png";
  return (
    <div className="container">
      <h1>Cart Page</h1>

      <DynamicImage imageName={imageName} width={500} />
    </div>
  );
};

export default Cart;
