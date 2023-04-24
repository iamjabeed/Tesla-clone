import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" alt="" />
      </Link>
      <Menu>
        <Link>Model S</Link>
        <Link>Model S</Link>
        <Link>Model S</Link>
        <Link>Model S</Link>
        <Link>Model S</Link>
        <Link>Model S</Link>
      </Menu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  gap: 10px;
  flex:1;

  white-space: nowrap;
`;
