import styled from "styled-components";

const Skills = () => {
  return (
    <StyledSkills id={"skills"}>
      <div className="container">
        <SkillsWrapper>
          <h2>My Skills</h2>
          <SkillsList>
            <li>HTML5</li>
            <li>CSS3, SCSS</li>
            <li>Bootstrap</li>
            <li>JavaScript, TypeScript</li>
            <li>
              React
              <span>
                (This page was made using React, SCSS (StyledComponents) etc.)
              </span>
            </li>
            <li>
              Angular <span>(a bit)</span>
            </li>
            <li>Axios</li>
            <li>Webpack</li>
            <li>
              A bit of testing technologies like Jest, Cypress. Actually I don't
              know them well, but ready to learn
            </li>
          </SkillsList>
        </SkillsWrapper>
      </div>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  background-color: #1a1a1a;
  color: white;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
  margin-top: 37px;
  margin: 0 auto;
  text-align: center;
  min-height: calc(50vh - 37px);
  padding: 2rem 0;
  h2 {
    color: #b41616;
    margin-bottom: 1rem;
  }
`;

const SkillsList = styled.ul`
  flex-direction: column;
  justify-content: space-between;
  > li {
    margin: 0.75rem 0;
    transition: all 0.4s;
  }
  > li > span {
    color: #b41616;
  }
  > li:hover {
    cursor: pointer;
    border-bottom: 1px solid #b41616;
  }
`;

export default Skills;
