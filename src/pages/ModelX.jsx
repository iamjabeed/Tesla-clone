import React from "react";
import CarHome from "../components/CarHome";
import Interior from "../components/Interior";
import CarDetails from "../components/CarDetails";
import Footer from "../components/Footer";

const ModelX = () => {
  return (
    <>
      <CarHome
        title="Model X"
        description="Plaid"
        bgImg="Model-X-Main-Hero.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Interior bgImg="Model-X-Performance-Hero.jpg" />
      <Interior bgImg="new-interior.jpg" title="Interior of the Future" />
      <CarDetails
        bgImg1="/images/connected.jpg"
        bgImg2="/images/audio.jpg"
        bgImg3="/images/room-for.jpg"
      />
        <Footer />
    </>
  );
};

export default ModelX;
