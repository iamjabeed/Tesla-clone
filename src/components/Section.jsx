import React from "react";
import styled from "styled-components";

const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online For Touchless Delivery</p>
      </ItemText>
      <Actions>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>existing inventory</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Actions>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  background: url(/images/model-s.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  text-align: center;
  margin-top: 15vh;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 45px;
  width: 256px;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background: #fff;
  opacity: 0.75;
  color: #000;
`;

const DownArrow = styled.img`
  height: 40px;
  margin: 4px;
  ${"" /* margin-top: 20px; */}
  animation: animateDown infinite 1.5s;
`;
const Actions = styled.div`
  display: grid;
  place-items: center;
`;
