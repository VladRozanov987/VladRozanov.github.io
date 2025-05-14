import { useState, useEffect } from "react";
import styled from "styled-components";
import Links from "./Links.component";

const MobNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <StyledMobileNav>
      <Burger onClick={toggleMenu} className={isOpen ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
      <MobileMenu className={isOpen ? "open" : ""}>
        <Links isMobile={true} closeMobMenu={() => setIsOpen(false)} />
      </MobileMenu>
    </StyledMobileNav>
  );
};

const StyledMobileNav = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Burger = styled.div`
  width: 35px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: absolute;
  right: 5%;
  z-index: 20;

  span {
    width: 100%;
    height: 2px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  &.open span:nth-child(1) {
    transform: translateY(13px) rotate(45deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: translateY(-13px) rotate(-45deg);
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transform: translateX(200px);
  transition: all 0.5s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
`;

export default MobNav;