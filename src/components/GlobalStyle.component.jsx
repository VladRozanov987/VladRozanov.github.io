import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Aboreto', serif;
    scroll-behavior: smooth;
  }

  .container {
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
  }

  h2 {
    color: #b41616;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    display: flex;
    li > a {
      cursor: pointer;
      text-decoration: none;
      color: white;
      font-size: 1.25rem;
      transition: all 0.4s;
      &:hover {
        color: #b41616;
      }
    }
  }
`;

export default GlobalStyle;
