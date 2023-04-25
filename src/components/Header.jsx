import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
const Header = () => {
  const [showBurger, setShowBurger] = useState(false);
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
        <CustomeMenu onClick={() => setShowBurger(!showBurger)}>
          <HiMenuAlt1 size={24} />
        </CustomeMenu>
      </RightMenu>

      <BurgerNav show={showBurger}>
        <CloseWrap>
          <CustomeClose onClick={() => setShowBurger(!showBurger)}>
            <HiOutlineX size={24} />
          </CustomeClose>
        </CloseWrap>
        <Link>Model s</Link>
        <Link>Model s</Link>
        <Link>Model s</Link>
        <Link>Model s</Link>
        <Link>Model s</Link>
        <Link>Model s</Link>
        <Link>Model s</Link>
        <Link>Model s</Link>
      </BurgerNav>
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
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    transition: background 0.4s ease-in-out;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
    padding: 6px 10px;
  }
  a:hover {
    background: rgba(112, 128, 144, 0.4);
  }

  @media (max-width: 520px) {
  }
`;

const CustomeMenu = styled.div`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: space-between;  */}

  width:240px;
  padding: 0 20px;
  gap: 20px;
  z-index: 1;
  transform: ${(props) => (props.show ? "translateX(100%)" : "translateX(0)")};
  transition: transform 0.3s ease;
  a {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding: 10px 0;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;

    @media (max-width: 820px) {
      font-size: 12px;
    }
  }
`;

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
const CustomeClose = styled.div`
  margin-top: 20px;
`;
