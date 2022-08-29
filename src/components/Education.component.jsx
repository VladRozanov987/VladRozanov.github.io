import styled from "styled-components";

const Education = () => {
  return (
    <StyledEducation id={"education"}>
      <div className="container">
        <EducationWrapper>
          <h2>Education</h2>
          <div className="line">
            <div className="year">
              <p>2014-2018</p>
            </div>
            <div className="main">
              CIBS UBS NBU, Department of Finance and Banking, Bachelor`s Degree
            </div>
          </div>
          <div className="line">
            <div className="year">
              <p>2018-2019</p>
            </div>
            <div className="main">
              CIBS UBS NBU, Department of Finance and Banking, Master's degree
            </div>
          </div>
          <div className="line">
            <div className="year">
              <p>2021-2022</p>
            </div>
            <div className="main">
              IT Step Academy, Front-End Developer Course
            </div>
          </div>
          <div className="line">
            <div className="year">
              <p>2022-...</p>
            </div>
            <div className="main">
              The Creative React and Redux Course (DevelopedByEd)
            </div>
          </div>
        </EducationWrapper>
      </div>
    </StyledEducation>
  );
};

const StyledEducation = styled.div`
  background-color: #424242;
  color: white;
`;

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 0;
  margin: 0 auto;
  text-align: center;
  min-height: calc(50vh - 36px);
  h2 {
    color: #b41616;
    margin-bottom: 1rem;
  }
  .line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    .year {
      width: 20%;
      color: #bb1515;
      font-size: 1.15rem;
      font-weight: bold;
      p {
        letter-spacing: 3px;
      }
    }
    .main {
      width: 80%;
      font-size: 1.15rem;
    }
  }
`;

export default Education;
