// Styled
import styled from "styled-components";

// Components
import MobNav from "./MobNav.component";
import DeskNav from "./DeskNav.component";

//Import icons
import { IoRoseOutline } from "react-icons/io5";
import { FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Nav = () => {
  return (
    <StyledNav>
      <NavContainer>
        <Title
          onClick={() => window.location.reload()}
          style={{ cursor: "pointer" }}
        >
          <IoRoseOutline className="nav-svg" size="30px" />
          <h1>
            <span>Roza</span>nov
          </h1>
        </Title>
        <ul className="social-list">
          <li>
            <a
              href="https://www.instagram.com/vvladrozanov/"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram size="30" />
            </a>
          </li>
          <li>
            <a href="https://t.me/AGRL4" rel="noreferrer" target="_blank">
              <FaTelegramPlane size="30" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vlad-rozanov-90789b249/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedinIn size="30" />
            </a>
          </li>
        </ul>
        <MobNav />
        <DeskNav />
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

  .social-list > li > a {
    margin-right: 1rem;
  }
`;

const Title = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  font-size: 2rem;
  transition: all 0.4s;
  animation: swap 2s linear 1s infinite alternate;
  @keyframes swap {
    0% {
      color: #b41616;
    }
    100% {
      color: white;
    }
  }
  h1 {
    font-size: 2rem;
  }
  span {
    color: #b41616;
    margin-left: 0.5rem;
    animation: swap 2s linear 1s infinite alternate;
    animation-delay: 2s;
    @keyframes swap {
      0% {
        color: white;
      }
      100% {
        color: #b41616;
      }
    }
  }
  .nav-svg {
    color: #b41616;
    animation: swap 2s linear 1s infinite alternate;
    @keyframes swap {
      0% {
        color: #b41616;
      }
      100% {
        color: white;
      }
    }
    @media screen and (max-width: 555px) {
      display: none;
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
