import { useState } from "react";
import styled from "styled-components";
import Links from "./Links";
//Icons
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openBtn = (
    <FiMenu
      className="hamburger"
      size="30px"
      color="white"
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  const closeBtn = (
    <AiOutlineClose
      className="hamburger"
      size="30px"
      color="white"
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  const closeMobMenu = () => {
    setIsOpen(false);
  };

  return (
    <StyledMobileNav>
      {isOpen ? closeBtn : openBtn}
      {isOpen && <Links isMobile={true} closeMobMenu={closeMobMenu} />}
    </StyledMobileNav>
  );
};

const StyledMobileNav = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
  }
  .hamburger {
    cursor: pointer;
    position: absolute;
    right: 5%;
  }
`;

export default MobileNav;
