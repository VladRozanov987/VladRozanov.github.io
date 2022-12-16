import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { listAnim, listItemAnim } from "../animations";
import { useScroll } from "../useScroll";

const Skills = () => {
  const [element, controls] = useScroll();

  return (
    <StyledSkills id={"skills"}>
      <div className="container">
        <SkillsWrapper>
          <h2>My Skills</h2>
          <SkillsList
            variants={listAnim}
            animate={controls}
            ref={element}
            initial="hidden"
          >
            <motion.li variants={listItemAnim}>HTML5</motion.li>
            <motion.li variants={listItemAnim}>CSS3, SCSS</motion.li>
            <motion.li variants={listItemAnim}>Bootstrap</motion.li>
            <motion.li variants={listItemAnim}>
              JavaScript, TypeScript
            </motion.li>
            <motion.li variants={listItemAnim}>
              React
              <span>
                (This page was made using React, SCSS (StyledComponents) etc.)
              </span>
            </motion.li>
            <motion.li variants={listItemAnim}>
              Angular <span>(a bit)</span>
            </motion.li>
            <motion.li variants={listItemAnim}>Axios</motion.li>
            <motion.li variants={listItemAnim}>Webpack</motion.li>
            <motion.li variants={listItemAnim}>
              A bit of testing technologies like Jest, Cypress. Actually I don't
              know them well, but ready to learn
            </motion.li>
          </SkillsList>
        </SkillsWrapper>
      </div>
    </StyledSkills>
  );
};

const StyledSkills = styled(motion.div)`
  background-color: #1a1a1a;
  color: white;
  overflow: hidden;
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

const SkillsList = styled(motion.ul)`
  flex-direction: column;
  justify-content: space-between;
  > li {
    font-size: 1.25rem;
    margin: 0.9rem 0;
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
