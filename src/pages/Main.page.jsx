//Import img
import mainBg from "../img/main-bg.webp";
import avatar from "../img/ava.png";
import { FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa";

//Styled
import styled from "styled-components";

//Components
import Skills from "../components/Skills.component";
import Portfolio from "../components/Portfolio.component";

//Animations
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";

const HomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <StyledHome id={"about"}>
      <div className="container">
        <MainHome>
          <img src={avatar} alt="avatar" data-aos="fade-up" />
          <h2 data-aos="fade-up">Vladyslav Rozanov</h2>
          <p data-aos="fade-up">front-end developer</p>
          <ul className="social-list" data-aos="fade-up">
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
                href="https://github.com/VladRozanov987"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub style={{ width: "30px", height: "30px" }} />
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
        </MainHome>
      </div>
      <Skills />
      <Portfolio />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 77px);
  margin-top: 77px;
  background-image: url(${mainBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  z-index: 999;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }
`;

const MainHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: calc(100vh - 77px);
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;
  color: white;
  img {
    border-radius: 50%;
    width: 15rem;
    height: 15rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p > span {
    color: #b41616;
    font-weight: bold;
    font-size: 1.5rem;
  }
  .social-list {
    margin-top: 1.5rem;
  }
  .social-list > li > a {
    margin: 1rem;
  }
`;

export default HomeSection;
