import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const CarHome = ({ title, description, bgImg, leftBtnText, rightBtnText }) => {
  return (
    <Wrap bg={bgImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </ItemText>
      </Fade>
      <Actions>
        <Fade bottom>
          <Stats>
            <Content>
              <h1>396mi</h1>
              <p>Range(EPA est.)</p>
            </Content>
            <Content>
              <h1>1.99s</h1>
              <p>0-60mph*</p>
            </Content>
            <Content>
              <h1>
                200<span>mph</span>
              </h1>
              <p>Top Speed</p>
            </Content>
            <Content>
              <h1>
                1,020<span>hp</span>
              </h1>
              <p>Peak Power</p>
            </Content>
          </Stats>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
      </Actions>
    </Wrap>
  );
};

export default CarHome;

const Wrap = styled.div`
  ${"" /* scroll-snap-align: start; */}
  width: 100vw;
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

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 500px;
  ${'' /* border: 2px solid red; */}

  @media (max-width: 750px) {
    width: 320px;
  }
`;

const Content = styled.div`
  text-align: center;
  h1 {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
    span {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.9);
    }
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
  }
  @media (max-width: 650px) {
    &:last-of-type {
      display: none;
    }
  }
`;

// const Stats = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 30px;
//   width: 500px;
//   border: 2px solid red;

//   @media (max-width: 650px) {
//     &:last-child {
//       display: none;
//     }
//   }
// `;

// const Content = styled.div`
//   text-align: center;
//   h1 {
//     font-size: 24px;
//     color: rgba(255, 255, 255, 0.9);
//     font-weight: 600;
//     span {
//       font-size: 16px;
//       color: rgba(255, 255, 255, 0.9);
//     }
//   }
//   p {
//     margin-top: 10px;
//     font-size: 14px;
//     color: rgba(255, 255, 255, 0.9);
//   }
// `;

const LeftButton = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.8);
  height: 40px;
  width: 256px;

  @media (max-width: 768px) {
    width: 320px;
    font-size: 14px;
  }
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.8);
    border-color: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease-in-out;
  }
`;
const RightButton = styled(LeftButton)`
  background: rgba(0, 0, 0, 0.6);

  border: none;
  color: #fff;

  :hover {
    background: rgba(0, 0, 0, 0.9);
    color: rgb(255, 255, 255);
    transition: all 0.3s ease-in-out;
  }
`;

const Actions = styled.div`
  display: grid;
  place-items: center;
`;
