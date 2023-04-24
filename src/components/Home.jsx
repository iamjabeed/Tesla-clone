import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        bgImg="model-y.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        bgImg="model-3.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        bgImg="model-s.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        bgImg="model-x.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        bgImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        bgImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
