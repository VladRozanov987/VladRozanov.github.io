//Import img
import mainBg from "../img/main-bg.webp";
import avatar from "../img/avatar.jpg";

//Styled
import styled from "styled-components";

//Framer motion
import { motion } from "framer-motion";

const HomeSection = () => {
  const titleAnim = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { duration: 1 } },
  };

  return (
    <StyledHome id={"about"}>
      <div className="container">
        <MainHome>
          <img src={avatar} alt="avatar" />
          <motion.h2 variants={titleAnim} animate="show" initial="hidden">
            Vladyslav Rozanov
          </motion.h2>
          <motion.p
            animate={{ scale: 1, transition: { duration: 1, delay: 1 } }}
            initial={{ scale: 0 }}
          >
            Still <span>not</span> even a junior front-end developer
          </motion.p>
        </MainHome>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
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
`;

export default HomeSection;
