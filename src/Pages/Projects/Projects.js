import React, { useState } from "react";

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
  ProjectButton,
} from "./Projects.styles";

import { SocialImg } from "../../Pages/About/About.styles";

// Images
import PiggyBank from "../../Assets/PiggyBank.png";
import Github from "../../Assets/Github2.png";
import KardMain from "../../Assets/KardMain2.png";
import KardMain2 from "../../Assets/KardSearch3.png";
import Instagram from "../../Assets/Instagram1.png";
import Instagram4 from "../../Assets/Instagram4.png";
import Catan1 from "../../Assets/Catan1.png";
import Rumours1 from "../../Assets/Rumours1.png";
import Rumours2 from "../../Assets/Rumours2.png";
import Apple from "../../Assets/Apple1.png";
import Google from "../../Assets/Google1.png";

const Projects = () => {
  const [project, setProject] = useState(0);

  const handeClickOne = () => {
    setProject(1);
  };
  const handeClickTwo = () => {
    setProject(2);
  };
  const handeClickThree = () => {
    setProject(3);
  };
  const handeClickFour = () => {
    setProject(4);
  };
  const handeClickFive = () => {
    setProject(5);
  };
  const handeClickSix = () => {
    setProject(6);
  };
  const handeClickSeven = () => {
    setProject(7);
  };
  const handeClickEight = () => {
    setProject(8);
  };

  return (
    <ProjectsContainer>
      <HeaderBar />
      <ProjectContainer>
        {project === 1 ? (
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
                <ProjectImg
                  style={{ height: "65%" }}
                  src={PiggyBank}
                  alt=""
                ></ProjectImg>
              </ProjectImgDiv>
              <TextThreeDiv>
                <TextThree>
                  Set financial goals, track your expenses, obtain a customized
                  investment portfolio, and create a state of the art budget to
                  help meet your goals. In addition, PiggyBank also has a built
                  in news component, youtube channel, and education section.
                </TextThree>
                <TextThree>
                  Everything is customizable based on your inputs.
                </TextThree>
                <TextThree>Get started today!</TextThree>
                <TextThree>
                  Built with: React, Node.js, express.js, PSQL, Recharts & Yahoo
                  Finance API
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
        ) : null}
        {project === 2 ? (
          <Project>
            <ProjectDetailsDiv>
              <TextOneDiv>
                <a
                  href="https://github.com/TylerZhang00/Kard"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "2px 8px" }}
                >
                  <SocialImg src={Github} alt=""></SocialImg>
                </a>
                <TextOne>Kard</TextOne>
              </TextOneDiv>
              <TextTwo>Where the business card becomes sociable</TextTwo>
              <ProjectImgDiv>
                <ProjectImg
                  style={{ height: "100%", paddingRight: "4px" }}
                  src={KardMain}
                  alt=""
                ></ProjectImg>
                <ProjectImg
                  style={{ height: "100%", paddingLeft: "4px" }}
                  src={KardMain2}
                  alt=""
                ></ProjectImg>
              </ProjectImgDiv>
              <TextThreeDiv>
                <TextThree>
                  Pick your favourite album, book, movie and restaurant and let
                  the world know.
                </TextThree>
                <TextThree>
                  Login and register to save your choices and obtain a unique
                  shareable link to share your Kard with your friends!
                </TextThree>
                <TextThree>
                  Built with: React, Node.js, express.js, PSQL, Auth0, iTunes
                  API, GoodReads API, TheMovieDB API, Google Places API
                </TextThree>
                <TextThree>
                  <a
                    href="https://mykard.netlify.app/#/"
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
        ) : null}
        {project === 3 ? (
          <Project>
            <ProjectDetailsDiv>
              <TextOneDiv>
                <a
                  href="https://github.com/TylerZhang00/Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "2px 8px" }}
                >
                  <SocialImg src={Github} alt=""></SocialImg>
                </a>
                <TextOne>Instagram</TextOne>
              </TextOneDiv>
              <TextTwo>Building a replica of Instagram</TextTwo>
              <ProjectImgDiv>
                <ProjectImg
                  style={{
                    height: "100%",
                    paddingRight: "4px",
                    maxWidth: "350px",
                  }}
                  src={Instagram}
                  alt=""
                ></ProjectImg>

                <ProjectImg
                  style={{
                    height: "100%",
                    paddingLeft: "4px",
                    maxWidth: "350px",
                  }}
                  src={Instagram4}
                  alt=""
                ></ProjectImg>
              </ProjectImgDiv>
              <TextThreeDiv>
                <TextThree>
                  No backend functionality! Just practicing front-end
                </TextThree>
                <TextThree>Best viewed on mobile</TextThree>
                <TextThree>Built with: React</TextThree>
                <TextThree>
                  <a
                    href="https://instagrampractice.netlify.app/"
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
        ) : null}
        {project === 4 ? (
          <Project>
            <ProjectDetailsDiv>
              <TextOneDiv>
                <a
                  href="https://github.com/TylerZhang00/CatanScoreboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "2px 8px" }}
                >
                  <SocialImg src={Github} alt=""></SocialImg>
                </a>
                <TextOne>Catan Scoreboard</TextOne>
              </TextOneDiv>
              <TextTwo>To keep track of score for the boys</TextTwo>
              <ProjectImgDiv>
                <ProjectImg
                  style={{
                    height: "100%",
                    paddingRight: "4px",
                    maxWidth: "350px",
                  }}
                  src={Catan1}
                  alt=""
                ></ProjectImg>
              </ProjectImgDiv>
              <TextThreeDiv>
                <TextThree>
                  Adding and remove scores for games. The data is saved onto the
                  heroku server.
                </TextThree>
                <TextThree>
                  Built with: React, antd, Node.js, express.js & PSQL
                </TextThree>
                <TextThree>To connect backend please also run heroku</TextThree>
                <TextThree>
                  <a
                    href="https://catanscoreboard.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    Front-end deployed with Netlify
                  </a>
                </TextThree>
                <TextThree>
                  <a
                    href="https://catanscoreboard.herokuapp.com/api/games"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    Back-end deployed with Heroku (allow 15 seconds to load)
                  </a>
                </TextThree>
              </TextThreeDiv>
            </ProjectDetailsDiv>
          </Project>
        ) : null}
        {project === 5 ? (
          <Project>
            <ProjectDetailsDiv>
              <TextOneDiv>
                <a
                  href="https://github.com/TylerZhang00/Rumours"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "2px 8px" }}
                >
                  <SocialImg src={Github} alt=""></SocialImg>
                </a>
                <TextOne>Rumours</TextOne>
              </TextOneDiv>
              <TextTwo>Hungry?</TextTwo>
              <ProjectImgDiv>
                <ProjectImg
                  style={{ height: "100%", paddingRight: "4px" }}
                  src={Rumours1}
                  alt=""
                ></ProjectImg>
                <ProjectImg
                  style={{ height: "100%", paddingRight: "4px" }}
                  src={Rumours2}
                  alt=""
                ></ProjectImg>
              </ProjectImgDiv>
              <TextThreeDiv>
                <TextThree>
                  A restaurant application that allows the customer to select
                  items from a menu and place an order. Upon placing an order,
                  the restaurant will receive an order confirmation text while
                  the customer will receive a confirmation call.
                </TextThree>
                <TextThree>
                  An order summary will then display on the app and a map will
                  render showing the directions from the customer's address to
                  Rumours.
                </TextThree>
                <TextThree>
                  Built with Node.js, express.js, jQuery, Twilio API & Google
                  Maps API
                </TextThree>
                <TextThree>
                  <a
                    href="https://rumours.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    Deployed with Heroku (allow 15 seconds to load)
                  </a>
                </TextThree>
              </TextThreeDiv>
            </ProjectDetailsDiv>
          </Project>
        ) : null}
        {project === 6 ? (
          <Project>
            <ProjectDetailsDiv>
              <TextOneDiv>
                <a
                  href="https://github.com/TylerZhang00/StockOrProduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "2px 8px" }}
                >
                  <SocialImg src={Github} alt=""></SocialImg>
                </a>
                <TextOne>Stock or Product</TextOne>
              </TextOneDiv>
              <TextTwo>Which would have made you more money?</TextTwo>
              <ProjectImgDiv>
                <ProjectImg
                  style={{ height: "100%", paddingRight: "4px" }}
                  src={Apple}
                  alt=""
                ></ProjectImg>
                <ProjectImg
                  style={{ height: "100%", paddingRight: "4px" }}
                  src={Google}
                  alt=""
                ></ProjectImg>
              </ProjectImgDiv>
              <TextThreeDiv>
                <TextThree>
                  Should you have bought that product or stock from the company?
                  Let's find out!
                </TextThree>
                <TextThree>
                  ** If no data shows, let me know because the API is limited
                </TextThree>
                <TextThree>
                  Built with React, Financial Modelling Prep API
                </TextThree>
                <TextThree>
                  <a
                    href="https://stockorphone.netlify.app/"
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
        ) : null}
        {project === 7 ? (
          <Project>
            <ProjectDetailsDiv>
              <TextOneDiv>
                <a
                  href="https://github.com/TylerZhang00/SentimentAnalysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "2px 8px" }}
                >
                  <SocialImg src={Github} alt=""></SocialImg>
                </a>
                <TextOne>Analyze My Sentiment</TextOne>
              </TextOneDiv>
              <TextTwo>How are you feeling?</TextTwo>
              <TextThreeDiv>
                <TextThree>
                  Submit some text and our sentiment analysis will derive your
                  emotional tone
                </TextThree>
                <TextThree>CURRENTLY IN PROGRESS</TextThree>
                <TextThree>
                  Built with React, Node.js, express.js & PSQL
                </TextThree>
                <TextThree>
                  <a
                    href="https://analyzemysentiment.netlify.com/"
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
        ) : null}
        {project === 8 ? (
          <Project>
            <ProjectDetailsDiv>
              <TextOneDiv>
                {/* <a
                  href="https://github.com/TylerZhang00/SentimentAnalysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "2px 8px" }}
                > */}
                <SocialImg src={Github} alt=""></SocialImg>
                {/* </a> */}
                <TextOne>Battleship</TextOne>
              </TextOneDiv>
              <TextTwo>Bounce 'em in to sink and win!</TextTwo>
              <TextThreeDiv>
                <TextThree>Building a battleship game with React</TextThree>
                <TextThree>CURRENTLY IN PROGRESS</TextThree>
                <TextThree>Built with React</TextThree>
                <TextThree>
                  {/* <a
                    href="https://analyzemysentiment.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    Deployed with Netlify
                  </a> */}
                </TextThree>
              </TextThreeDiv>
            </ProjectDetailsDiv>
          </Project>
        ) : null}
      </ProjectContainer>
      <ProjectContainerRight>
        <ProjectButton onClick={handeClickOne}>PiggyBank</ProjectButton>
        <ProjectButton onClick={handeClickTwo}>Kard</ProjectButton>
        <ProjectButton onClick={handeClickFive}>Rumours</ProjectButton>
        <ProjectButton onClick={handeClickThree}>Instagram</ProjectButton>
        <ProjectButton onClick={handeClickFour}>Catan Scoreboard</ProjectButton>
        <ProjectButton onClick={handeClickSix}>Stock or Product</ProjectButton>
        <ProjectButton onClick={handeClickSeven}>
          Sentiment Analysis
        </ProjectButton>
        <ProjectButton onClick={handeClickEight}>Battleship</ProjectButton>
      </ProjectContainerRight>
    </ProjectsContainer>
  );
};

export default Projects;
