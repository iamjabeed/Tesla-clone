import React from "react";
import CarHome from "../components/CarHome";
import Interior from "../components/Interior";
const ModelY = () => {
  return (
    <>
      <CarHome
        title="Model Y"
        description="Schedule a Demo Drive"
        bgImg="Model-Y-Main-Hero.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Interior bgImg="Model-Y-Interior-Hero.jpg" />
      <Interior bgImg="AWD_hero@2.jpg" />
    </>
  );
};

export default ModelY;
