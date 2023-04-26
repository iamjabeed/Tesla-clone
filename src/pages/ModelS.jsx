import React from "react";
import CarHome from "../components/CarHome";
import Interior from "../components/Interior";
import CarDetails from "../components/CarDetails";

const ModelS = () => {
  return (
    <>
      <CarHome
        title="Model S"
        description="Plaid"
        bgImg="Model-S-Main-Hero.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Interior bgImg="new-interior.jpg" title="Interior of the Future" />
      <CarDetails bgImg1="/images/connected.jpg"
      bgImg2="/images/audio.jpg"
      bgImg3="/images/room-for.jpg" />
    </>
  );
};

export default ModelS;
