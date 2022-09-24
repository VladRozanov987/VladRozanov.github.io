import styled from "styled-components";
import Links from "./Links.jsx";

const NavLinks = () => {
  return (
    <LinkList>
      <Links />
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
