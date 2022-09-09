import styled from "styled-components";

const NavLinks = () => {
  return (
    <LinkList>
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
    </LinkList>
  );
};

const LinkList = styled.div`
  display: block;
  ul {
    display: flex;
    li > a {
      padding: 0 0.6rem;
    }
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default NavLinks;
