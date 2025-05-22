import styled from "styled-components";

// Images
import omb from "../img/omb.jpg";
import bestEats from "../img/bestEats.jpg";
import capture from "../img/capture.jpg";
import trevland from "../img/trevland.jpg";
import furniShop from "../img/furniShop.jpg";
import vikings from "../img/vikings.jpg";
import enlom from "../img/enlom.jpg";

//Animations
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const portfolioItems = [
    { img: enlom, alt: "Enlom", url: "https://enlom.net/" },
    { img: omb, alt: "Ombudsman PL", url: "https://ombudsman.pl/" },
    {
      img: bestEats,
      alt: "bestEats",
      url: "https://tailwind-test-gules.vercel.app/",
    },
    {
      img: capture,
      alt: "capture",
      url: "https://capture-tau-one.vercel.app/",
    },
    {
      img: trevland,
      alt: "trevland",
      url: "https://vladrozanov987.github.io/trevland/",
    },
    {
      img: furniShop,
      alt: "furniShop",
      url: "https://furni-shop-red.vercel.app/",
    },
    {
      img: vikings,
      alt: "vikings",
      url: "https://vladrozanov987.github.io/vikings/",
    },
  ];

  return (
    <StyledPortfolio id={"portfolio"}>
      <div className="container">
        <PortfolioWrapper>
          <h2>Portfolio</h2>
          <PortfolioList>
            {portfolioItems.map((item, index) => (
              <div
                className="portfolio__list-item"
                key={index}
                data-aos="fade-in"
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img className="portfolio-bg" src={item.img} alt={item.alt} />
                </a>
              </div>
            ))}
          </PortfolioList>
        </PortfolioWrapper>
      </div>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
  background-color: #1a1a1a;
  color: white;
  min-height: calc(100vh - 77px);
`;

const PortfolioWrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const PortfolioList = styled.div`
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
      object-fit: cover;
      object-position: center;
    }
    &:hover {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }
  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export default Portfolio;
