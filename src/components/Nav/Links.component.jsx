// Styled
import styled from "styled-components";

import { Link } from "react-scroll";

const Links = (props) => {
  return (
    <StyledLinks>
      <ul>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            About
          </Link>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <Link to="skills" smooth={true} duration={500} offset={-70}>
            Skills
          </Link>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <Link to="portfolio" smooth={true} duration={500} offset={-70}>
            Portfolio
          </Link>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <Link to="contacts" smooth={true} duration={500} offset={-70}>
            Contacts
          </Link>
        </li>
      </ul>
    </StyledLinks>
  );
};

const StyledLinks = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    button {
      display: block;
      font-size: 24px;
      padding: 12px;
      margin: 25px 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #5f6366;
      backdrop-filter: blur(10px);
      li {
        margin: 25px 0;
        a {
          font-size: 32px;
        }
      }
    }
  }
`;

export default Links;
