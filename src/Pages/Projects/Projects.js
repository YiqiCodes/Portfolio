import React from "react";

// Components
import HeaderBar from "../../Components/HeaderBar/HeaderBar";

// Styles
import {
  ProjectsContainer,
  ProjectContainer,
  Project,
  ProjectImg,
  ProjectImgDiv,
  ProjectDetailsDiv,
  TextOneDiv,
  TextOne,
  TextTwo,
  TextThree,
  TextThreeDiv,
  ProjectContainerRight,
} from "./Projects.styles";

import { SocialImg } from "../../Pages/About/About.styles";
// Images
import PiggyBank from "../../Assets/PiggyBank.png";
import Github from "../../Assets/Github2.png";

const Projects = () => {
  return (
    <ProjectsContainer>
      <HeaderBar />
      <ProjectContainer>
        <Project>
          <ProjectDetailsDiv>
            <TextOneDiv>
              <a
                href="https://github.com/TylerZhang00/PiggyBank"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "2px 8px" }}
              >
                <SocialImg src={Github} alt=""></SocialImg>
              </a>
              <TextOne>PiggyBank</TextOne>
            </TextOneDiv>
            <TextTwo>A Comphrensive Financial Literacy App</TextTwo>
            <ProjectImgDiv>
              <ProjectImg src={PiggyBank} alt=""></ProjectImg>
            </ProjectImgDiv>
            <TextThreeDiv>
              <TextThree>
                Set financial goals, track your expenses, obtain a customized
                investment portfolio, and create a state of the art budget to
                help meet your goals. In addition, PiggyBank also has a built in
                news component, youtube channel, and education section.
              </TextThree>
              <TextThree>
                Everything is customizable based on your inputs.
              </TextThree>
              <TextThree>Get started today!</TextThree>
              <TextThree>
                Built with: React, Node.js, PSQL, Recharts & Yahoo Finance API
              </TextThree>
              <TextThree>
                <a
                  href="https://thepiggybank.netlify.app/#/welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  Deployed with Netlify
                </a>
              </TextThree>
            </TextThreeDiv>
          </ProjectDetailsDiv>
        </Project>
      </ProjectContainer>
      <ProjectContainerRight></ProjectContainerRight>
    </ProjectsContainer>
  );
};

export default Projects;
