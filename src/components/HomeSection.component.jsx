//Import img
import mainBg from "../img/main-bg.webp";
import avatar from "../img/avatar.jpg";
//Styled
import styled from "styled-components";

const HomeSection = () => {
  return (
    <StyledHome id={"about"}>
      <div className="container">
        <MainHome>
          <img src={avatar} alt="avatar" />
          <h2>Vladyslav Rozanov</h2>
          <p>
            Still <span>not</span> even a junior front-end developer
          </p>
        </MainHome>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 77px);
  margin-top: 77px;
  background-image: url(${mainBg});
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
`;

export default HomeSection;
