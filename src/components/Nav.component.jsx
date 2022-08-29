import styled, { keyframes } from "styled-components";
//Import icons
import { IoRoseOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <StyledNav>
      <NavContainer>
        <Title>
          <IoRoseOutline className="nav-svg" />
          <span>Roza</span>nov
        </Title>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
      </NavContainer>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 1.25rem 0;
  background-color: #1a1a1a;
  z-index: 99999;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.h2`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  font-size: 2rem;
  transition: all 0.4s;
  animation: swap 0.4s;
  animation: swap 2s linear 1s infinite alternate;
  @keyframes swap {
    0% {
      color: #b41616;
    }
    100% {
      color: white;
    }
  }
  span {
    color: #b41616;
    margin-left: 0.5rem;
    animation: swap 2s linear 1s infinite alternate;
    @keyframes swap {
      0% {
        color: #b41616;
      }
      100% {
        color: white;
      }
    }
  }
  .nav-svg {
    color: #b41616;
    width: 30px;
    height: 30px;
    animation: swap 2s linear 1s infinite alternate;
    @keyframes swap {
      0% {
        color: #b41616;
      }
      100% {
        color: white;
      }
    }
  }
  &:hover {
    color: #b41616;
    span,
    .nav-svg {
      color: white;
    }
  }
`;

export default Nav;
