import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Interior = ({ bgImg, title }) => {
  return (
    <Wrap bg={bgImg}>
      <Fade bottom>
       {title && <ItemText>
          <h1>{title}</h1>
        </ItemText>}
      </Fade>
    </Wrap>
  );
};

export default Interior;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("images/${props.bg}")`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
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
  h1 {
    color: #000;
    font-size: 40px;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size:30px;
  }
  }
`;
