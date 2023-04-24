import React, { useState } from "react";
import styled from "styled-components";

const Section = ({ title, description, bgImg, leftBtnText, rightBtnText }) => {
  return (
    <Wrap bg={bgImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Actions>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Actions>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  ${"" /* scroll-snap-align: start; */}
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("images/${props.bg}")`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  ${"" /* background-attachment: fixed; */}
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
  gap: 14px;
  margin-bottom: 30px;
  padding-right: 10px;
  padding-left: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  @media (max-width: 768px) {
    width: 340px;
  }
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${"" /* text-transform: uppercase; */}
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
