// Styled
import styled from "styled-components";
// Components
import Links from "./Links.component";

const DeskNav = () => {
  return (
    <LinkList>
      <Links />
    </LinkList>
  );
};

const LinkList = styled.div`
  ul {
    display: flex;
    align-items: center;
    li {
      margin-right: 40px;
    }
  }

  button {
    padding: 14px 35px;
  }

  @media screen and (max-width: 928px) {
    ul {
      li {
        margin-right: 20px;
        a {
          font-size: 14px;
        }
      }
    }
    button {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default DeskNav;
