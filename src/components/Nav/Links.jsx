import styled from "styled-components";

const Links = (props) => {
  return (
    <StyledNav>
      <ul>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <a href="#education">Education</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 77px;
    left: 0;
    width: 100%;
    height: calc(100vh - 77px);
    background-color: rgba(0, 0, 0, 0.9);
    border-top: 1px solid #b41616;
    li {
      margin: 30px 0;
    }
  }
  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
  }
`;

export default Links;
