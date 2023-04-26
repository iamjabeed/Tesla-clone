import React from "react";
import CarHome from "../components/CarHome";
import Interior from "../components/Interior";

const ModelS = () => {
  return (
    <div>
      <CarHome
        title="Model S"
        description="Plaid"
        bgImg="Model-S-Main-Hero.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Interior bgImg="new-interior.jpg" title="Interior of the Future" />
    </div>
  );
};

export default ModelS;
