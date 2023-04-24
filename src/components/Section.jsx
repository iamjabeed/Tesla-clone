import React from "react";
import styled from "styled-components";

const Section = () => {
  return <Wrap>Section</Wrap>;
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
`;
