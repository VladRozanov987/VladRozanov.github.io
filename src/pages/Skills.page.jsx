//Styled-components
import styled from "styled-components";

//Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaAngular,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPhp,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiJavascript,
  SiWebpack,
} from "react-icons/si";

//Animations
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: "ease-in-out",
        });
      }, []);

      const skills = [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaSass />, name: "SCSS" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiStyledcomponents />, name: "Styled Components" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaAngular />, name: "Angular" },
        { icon: <SiWebpack />, name: "Webpack" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <FaPhp />, name: "PHP" },
      ];
      

  return (
    <StyledSkills>
      <div className="container">
        <SkillsWrapper>
          <h2>My Skills</h2>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <div
                className="skill-item"
                key={index}
                data-aos="fade-up"
              >
                <div className="icon">{skill.icon}</div>
                <div className="label">{skill.name}</div>
              </div>
            ))}
          </SkillsGrid>
        </SkillsWrapper>
      </div>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  background-color: #242424;
  color: white;
  overflow: auto;
  min-height: calc(100vh - 77px);
  margin-top: 77px;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 77px);
  text-align: center;
  padding: 2rem 0;
  h2 {
    color: #b41616;
    margin-bottom: 1rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(140px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
  width: 100%;

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #414141;
    height: 150px;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 20px rgba(180, 22, 22, 0.3);
      cursor: pointer;
    }

    .icon {
      font-size: 3rem;
      color: #b41616;
      margin-bottom: 0.5rem;
    }

    .label {
      font-size: 1rem;
      color: #fff;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(140px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(140px, 1fr));
  }
`;



export default Skills;
