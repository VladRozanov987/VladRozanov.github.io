import styled from "styled-components";
//Icons
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Contacts = () => {
  return (
    <StyledContacts>
      <div className="container">
        <ContactsWrapper>
          <ul>
            <li>
              <a href="https://www.instagram.com/vvladrozanov/" target="_blank">
                <AiOutlineInstagram style={{ width: "30px", height: "30px" }} />
              </a>
            </li>
            <li>
              <a href="https://github.com/VladRozanov987" target="_blank">
                <AiFillGithub style={{ width: "30px", height: "30px" }} />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank">
                <AiOutlineFacebook style={{ width: "30px", height: "30px" }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vlad-rozanov-90789b249/"
                target="_blank"
              >
                <AiOutlineLinkedin style={{ width: "30px", height: "30px" }} />
              </a>
            </li>
          </ul>
        </ContactsWrapper>
      </div>
    </StyledContacts>
  );
};

const StyledContacts = styled.div`
  background-color: #424242;
  color: white;
`;

const ContactsWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 0;
  margin: 0 auto;
  text-align: center;
  min-height: 10vh;
  ul {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 956px) {
    width: 30%;
  }
  @media screen and (max-width: 660px) {
    width: 70%;
  }
`;
export default Contacts;
