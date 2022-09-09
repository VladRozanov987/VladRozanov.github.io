import styled from "styled-components";

const Portfolio = () => {
  return (
    <StyledPortfolio id={"portfolio"}>
      <div className="container">
        <PortfolioWrapper>
          <h2>Portfolio</h2>
          <PortfolioList>
            <div className="portfolio__list-item">
              <h3>Title</h3>
              <p>Description</p>
            </div>
            <div className="portfolio__list-item">
              <h3>Title</h3>
              <p>Description</p>
            </div>
            <div className="portfolio__list-item">
              <h3>Title</h3>
              <p>Description</p>
            </div>
            <div className="portfolio__list-item">
              <h3>Title</h3>
              <p>Description</p>
            </div>
            <div className="portfolio__list-item">
              <h3>Title</h3>
              <p>Description</p>
            </div>
            <div className="portfolio__list-item">
              <h3>Title</h3>
              <p>Description</p>
            </div>
            <div className="portfolio__list-item">
              <h3>Title</h3>
              <p>Description</p>
            </div>
            <div className="portfolio__list-item">
              <h3>Title</h3>
              <p>Description</p>
            </div>
            <div className="portfolio__list-item">
              <h3>Title</h3>
              <p>Description</p>
            </div>
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
  min-height: calc(100vh - 77px);
  text-align: center;
  padding: 2rem 0;
  h2 {
    color: #b41616;
    margin-bottom: 2rem;
  }
`;

const PortfolioList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  .portfolio__list-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 27vh;
    background: #fff;
    color: #b41616;
    transition: all 0.3s;
    &:hover {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }
  @media screen and (max-width: 660px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export default Portfolio;
