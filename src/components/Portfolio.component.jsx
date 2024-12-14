import styled from "styled-components";

// Images
import musicApp from "../img/music-app.png";
import bestEats from "../img/bestEats.jpg";
import capture from "../img/capture.jpg";
import trevland from "../img/trevland.jpg";
import furniShop from "../img/furniShop.jpg";
import vikings from "../img/vikings.jpg";

//Animations
import { motion } from "framer-motion";
import { listAnim, edItemAnim } from "../animations";
import { useScroll } from "../useScroll";

const Portfolio = () => {
  const [element, controls] = useScroll();
  return (
    <StyledPortfolio id={"portfolio"}>
      <div className="container">
        <PortfolioWrapper>
          <h2>Portfolio</h2>
          <PortfolioList
            variants={listAnim}
            animate={controls}
            initial="hidden"
            ref={element}
          >
            <motion.div variants={edItemAnim} className="portfolio__list-item">
              <a href="https://vladrozanov987.github.io/music-app/">
                <img className="portfolio-bg" src={musicApp} alt="music app" />
              </a>
            </motion.div>
            <motion.div variants={edItemAnim} className="portfolio__list-item">
              <a href="https://tailwind-test-gules.vercel.app/">
                <img className="portfolio-bg" src={bestEats} alt="bestEats" />
              </a>
            </motion.div>
            <motion.div variants={edItemAnim} className="portfolio__list-item">
              <a href="https://capture-tau-one.vercel.app/">
                <img className="portfolio-bg" src={capture} alt="capture" />
              </a>
            </motion.div>
            <motion.div variants={edItemAnim} className="portfolio__list-item">
              <a href="https://vladrozanov987.github.io/trevland/">
                <img className="portfolio-bg" src={trevland} alt="trevland" />
              </a>
            </motion.div>
            <motion.div variants={edItemAnim} className="portfolio__list-item">
              <a href="https://furni-shop-red.vercel.app/">
                <img className="portfolio-bg" src={furniShop} alt="furniShop" />
              </a>
            </motion.div>
            <motion.div variants={edItemAnim} className="portfolio__list-item">
              <a href="https://vladrozanov987.github.io/vikings/">
                <img className="portfolio-bg" src={vikings} alt="vikings" />
              </a>
            </motion.div>
          </PortfolioList>
        </PortfolioWrapper>
      </div>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
  background-color: #1a1a1a;
  color: white;
`;

const PortfolioWrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
  h2 {
    color: #b41616;
    margin-bottom: 2rem;
  }
`;

const PortfolioList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  .portfolio__list-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #fff;
    color: #b41616;
    transition: all 0.3s;
    .portfolio-bg {
      width: 100%;
      height: 100%;
    }
    &:hover {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }
  @media screen and (max-width: 660px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export default Portfolio;
