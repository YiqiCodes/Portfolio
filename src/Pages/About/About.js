import React from "react";

// Components
import HeaderBar from "../../Components/HeaderBar/HeaderBar";

// Styles
import {
  AboutContainer,
  AboutContentContainer,
  SummaryContainer,
  ResumeContainer,
  SocialsContainer,
  DetailsContainer,
  Details,
  ProfilePictureContainer,
  BottomContainer,
  SocialIconDiv,
  SocialImg,
} from "./About.styles.js";

import Resume from "../../Assets/Resume.png";

import Yiqi from "../../Assets/Yiqi.jpg";
import Github from "../../Assets/Github.png";
import LinkedIn from "../../Assets/LinkedIn2.png";
import Instagram from "../../Assets/Instagram.png";
import Youtube from "../../Assets/Youtube3.png";

const About = () => {
  return (
    <AboutContainer>
      <HeaderBar />
      <AboutContentContainer>
        <DetailsContainer>
          <ProfilePictureContainer src={Yiqi} alt=""></ProfilePictureContainer>
          <Details>
            Tyler Zhang<br></br>
            <br></br>
            Location: Toronto <br></br>
            <br></br>
            Phone: 613-371-4897<br></br>
            <br></br>
            Email: thetylerzhang@gmail.com
          </Details>
        </DetailsContainer>
        <SummaryContainer>
          Accountant turned photographer turned programmer <br></br>
          <br></br>
          After travelling the world for a year in 2019, I've realized that I
          want to live each and every day at the intersection of art and
          technology. This is why I fell in love with web development. <br></br>
          <br></br>I want to bring my passion and energy to a company that is
          doing meaningful work and striving to create value for society{" "}
          <br></br>
        </SummaryContainer>
        <BottomContainer>
          <ResumeContainer>
            <a
              href="https://www.youtube.com/channel/UCNZRyhQRcmYbc9NAqvu-jsw?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialImg
                style={{ width: "100px", height: "100px", padding: "10px" }}
                src={Resume}
                alt=""
              ></SocialImg>
            </a>
          </ResumeContainer>
          <SocialsContainer>
            <a
              href="https://github.com/TylerZhang00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialImg src={Github} alt=""></SocialImg>
            </a>

            <SocialIconDiv>
              <a
                href="https://www.linkedin.com/in/yiqi-tyler-zhang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialImg src={LinkedIn} alt=""></SocialImg>
              </a>
            </SocialIconDiv>
            <SocialIconDiv>
              <a
                href="https://www.instagram.com/zhangyiqi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialImg src={Instagram} alt=""></SocialImg>
              </a>
            </SocialIconDiv>
            <SocialIconDiv>
              <a
                href="https://www.youtube.com/channel/UCNZRyhQRcmYbc9NAqvu-jsw?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialImg src={Youtube} alt=""></SocialImg>
              </a>
            </SocialIconDiv>
          </SocialsContainer>
        </BottomContainer>
      </AboutContentContainer>
    </AboutContainer>
  );
};

export default About;
