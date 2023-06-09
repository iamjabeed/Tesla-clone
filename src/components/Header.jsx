import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";

import { useSelector } from "react-redux";
import { selectCars } from "../utils/carSlice";
const Header = () => {
  const [showBurger, setShowBurger] = useState(false);

  const cars = useSelector(selectCars);
  // console.log(cars);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <Link to={"/models"}>Model S</Link>
        <Link to={"/model3"}>Model 3</Link>
        <Link to={"/modelx"}>Model X</Link>
        <Link to={"/modely"}>Model Y</Link>
        <Link to={"/solarroof"}>Solar Roof</Link>
        <Link>Solar Panels</Link>

        {/* {cars && cars.map((car, i) => <Link key={i}>{car}</Link>)} */}
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
        {cars && cars.map((car, i) => <Link key={i} to={"/"}>{car}</Link>)}
        <Link>Existing Inventory</Link>
        <Link>Used Inventory</Link>
        <Link>Trade In</Link>
        <Link>Shop</Link>
        <Link>Account</Link>
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
    color:#1f1f1f;
    padding: 6px 10px;
    white-space: nowrap;
    transition: background 0.4s ease-in-out;
  }
  a:hover {
    background: rgba(132, 148, 144, 0.4);
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
    color:#1f1f1f;
  }
  a:hover {
    background: rgba(132, 148, 144, 0.4);
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
  overflow-y: scroll;
  width: 240px;
  padding: 0 20px;
  gap: 14px;
  z-index: 1;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease;
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
  margin-top: 14px;
`;
