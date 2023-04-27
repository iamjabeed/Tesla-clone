import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h1>Tesla &#169; 2023</h1>
      <h1>Privacy & Legal</h1>
      <h1>Vehical Recalls</h1>
      <h1>Careers</h1>
      <h1>News</h1>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding: 20px 0;

  h1 {
    font-size: 18px;

    @media (max-width: 720px) {
      font-size: 14px;
    }
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
