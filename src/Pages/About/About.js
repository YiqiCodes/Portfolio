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

import {
  HalfLeft,
  HalfRight,
  TextContainer,
  NameText,
  Dot,
  NameDotContainer,
  RightTextContainer,
  RainbowDotImg,
} from "../Home/Home.styles";

// API
import Typical from "react-typical";

// Images
import RainbowCircle from "../../Assets/RainbowCircle.png";
import Resume from "../../Assets/Resume.png";
import Yiqi from "../../Assets/Yiqi.jpg";
import Github from "../../Assets/Github2.png";
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
            {/* Tyler Zhang<br></br>
            <br></br> */}
            Location: Toronto <br></br>
            <br></br>
            Phone: 613-371-4897<br></br>
            <br></br>
            Email: thetylerzhang@gmail.com
          </Details>
        </DetailsContainer>
        <SummaryContainer>
          Accountant turned photographer turned programmer. <br></br>
          <br></br>
          After travelling the world for a year in 2019, I've realized that I
          want to live each and every day at the intersection of art and
          technology. This is why I fell in love with web development. <br></br>
          <br></br>I want to bring my passion and energy to a company that is
          doing meaningful work and striving to create value for society.
          <br></br>
        </SummaryContainer>
        <BottomContainer>
          <ResumeContainer>
            Resume (click accessibility mode):
            <a
              href="https://www.linkedin.com/in/yiqi-tyler-zhang/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAAuCy7QBg7x1U1vrgmjMkQ5il-3IH0JKjcs,1593795077157)/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialImg
                style={{ width: "80px", height: "80px", padding: "10px" }}
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
      <HalfLeft />
      <TextContainer>
        <NameText>Tyler </NameText>
        <NameDotContainer>
          <NameText>Zhang </NameText>
          <Dot
            style={{
              background: "none",
            }}
          >
            <RainbowDotImg src={RainbowCircle} alt=""></RainbowDotImg>
          </Dot>
        </NameDotContainer>
      </TextContainer>
      <HalfRight style={{ height: "100vh" }}>
        <RightTextContainer>
          <Typical
            steps={["Full-Stack Developer", 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </RightTextContainer>
      </HalfRight>
    </AboutContainer>
  );
};

export default About;
