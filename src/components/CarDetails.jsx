import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const CarDetails = ({ bgImg1, bgImg2, bgImg3 }) => {
  return (
    <Container>
      <Wrap>
        <Content>
          <Fade bottom>
            <Car>
              <img src={bgImg1} alt="car" />
            </Car>
          </Fade>

          <Text>
            <Fade bottom>
              <h1>Stay Connected</h1>
              <p>
                Instantly connect with multi-device Bluetooth, or fast charge
                devices with wireless and 36-watt USB-C charging.
              </p>
            </Fade>
          </Text>
        </Content>
        <Content>
          <Text>
            <Fade bottom>
              <h1>Immersive Sound</h1>
              <p>
                A 22-speaker, 960-watt audio system with Active Road Noise
                Reduction offers immersive listening and studio-grade sound
                quality.
              </p>
            </Fade>
          </Text>
          <Fade bottom>
            <Car>
              <img src={bgImg2} alt="car" />
            </Car>
          </Fade>
        </Content>
        <Content>
          <Fade bottom>
            <Car>
              <img src={bgImg3} alt="car" />
            </Car>
          </Fade>
          <Text>
            <Fade bottom>
              <h1>Room for Everything</h1>
              <p>
              With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too. Compare Models
              </p>
            </Fade>
          </Text>
        </Content>
      </Wrap>
    </Container>
  );
};

export default CarDetails;

const Container = styled.div`
  background: #000;
  height: 100%;
  width: 100vw;
  padding: 50px 0;
  ${"" /* z-index:1; */}
`;
const Wrap = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1050px;

  margin: 0 auto ${"" /* z-index:10; */};
`;
const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Car = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${"" /* background-image: ${(props) => `url("images/${props.bg}")`}; */}
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 520px;
  @media (max-width: 768px) {
    width: 100%;
    padding:20px;
  }
  img {
    width: 100%;
  }
`;
const Text = styled.div`
  max-width: 520px;
  width: 100%;

  display: flex;
  flex-direction: column;
  ${'' /* justify-content: center; */}
  ${'' /* align-items: center; */}
  gap: 01rem;
  padding: 0 90px;
  margin-top:5rem;
  h1 {
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
  p {
    color: white;
    font-size: 14px;
  }
  ${'' /* @media (max-width: 768px) {
    ${'' /* width: 260px; */}

    h1 {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
  p {
    color: white;
    font-size: 12px;
  }
  } */}
`;
