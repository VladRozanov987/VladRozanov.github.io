import styled from "styled-components";

//Animations
import { motion } from "framer-motion";
import { listAnim, edItemAnim } from "../animations";
import { useScroll } from "../useScroll";

const Education = () => {
  const [element, controls] = useScroll();

  return (
    <StyledEducation id={"education"}>
      <div className="container">
        <EducationWrapper
          ref={element}
          animate={controls}
          variants={listAnim}
          initial="hidden"
        >
          <h2>Education</h2>
          <motion.div variants={edItemAnim} className="line">
            <div className="year">
              <p>2014-2018</p>
            </div>
            <div className="main">
              CIBS UBS NBU, Department of Finance and Banking, Bachelor`s Degree
            </div>
          </motion.div>
          <motion.div variants={edItemAnim} className="line">
            <div className="year">
              <p>2018-2019</p>
            </div>
            <div className="main">
              CIBS UBS NBU, Department of Finance and Banking, Master's degree
            </div>
          </motion.div>
          <motion.div variants={edItemAnim} className="line">
            <div className="year">
              <p>2021-2022</p>
            </div>
            <div className="main">
              IT Step Academy, Front-End Developer Course
            </div>
          </motion.div>
          <motion.div variants={edItemAnim} className="line">
            <div className="year">
              <p>2022-...</p>
            </div>
            <div className="main">
              The Creative React and Redux Course (DevelopedByEd)
            </div>
          </motion.div>
        </EducationWrapper>
      </div>
    </StyledEducation>
  );
};

const StyledEducation = styled.div`
  background-color: #424242;
  color: white;
`;

const EducationWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 0;
  min-height: calc(50vh - 36px);
  h2 {
    color: #df0e0e;
    margin-bottom: 1rem;
  }
  .line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    .year {
      width: 20%;
      color: #df0e0e;
      font-size: 1.25rem;
      font-weight: bold;
      p {
        letter-spacing: 3px;
      }
    }
    .main {
      width: 80%;
      font-size: 1.25rem;
    }
  }
  @media screen and (max-width: 956px) {
    width: 100%;
    .line > .main,
    .year {
      font-size: 0.9rem;
    }
  }
`;

export default Education;
