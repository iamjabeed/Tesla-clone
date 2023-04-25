import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
const Header = ({ isMenuOpen, setIsMenuOpen }) => {
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
      <RightMenu>
        <Link>Shop</Link>
        <Link>Account</Link>
        <CustomeMenu>
          {isMenuOpen ? (
            <HiMenuAlt1 size={30} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          ) : (
            <HiOutlineX size={30} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          )}
        </CustomeMenu>
      </RightMenu>
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
  justify-content: center;
  ${"" /* gap: 10px; */}
  flex: 1;
  a {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
    padding: 6px 10px;
    white-space: nowrap;
    transition: background 0.4s ease-in-out;
  }
  a:hover {
    background: rgba(112, 128, 144, 0.4);
  }

  @media (max-width: 820px) {
    display:none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  ${"" /* gap: 10px; */}
  a {
    transition: background 0.4s ease-in-out;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
    padding: 6px 10px;
    
    ${'' /* @media (max-width: 520px) {
    font-size: 13px;
  } */}

  }
  a:hover {
    background: rgba(112, 128, 144, 0.4);
  }

  @media (max-width: 820px) {

  }
`;

const CustomeMenu = styled.div`
  cursor: pointer;
`;
