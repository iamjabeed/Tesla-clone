import React from "react";
import CarHome from "../components/CarHome";
import Interior from "../components/Interior";

const Model3 = () => {
  return (
    <>
      <CarHome
        title="Model 3"
        description="Schedule a Demo Drive"
        bgImg="Model-3-Main-Hero.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Interior bgImg="model-3-hero-a.jpg" />
      <Interior bgImg="Model-3-Performance-Hero-Desktop-LHD.jpg" />
    </>
  );
};

export default Model3;
