import React, { useState, useEffect } from "react";

// Components
import HeaderBar from "../../Components/HeaderBar/HeaderBar";

// Styles
import {
  HomeContainer,
  HalfLeft,
  HalfRight,
  TextContainer,
  NameText,
  Dot,
  NameDotContainer,
  LeftTextContainer,
  RightTextContainer,
  RainbowDotImg,
} from "./Home.styles.js";

import Typical from "react-typical";
import RainbowCircle from "../../Assets/RainbowCircle.png";

const Home = () => {
  const [textZero, setTextZero] = useState(true);
  const [textOne, setTextOne] = useState(false);
  const [textTwo, setTextTwo] = useState(false);
  const [textThree, setTextThree] = useState(false);
  const [textFour, setTextFour] = useState(false);
  const [textFive, setTextFive] = useState(false);
  const [textSix, setTextSix] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextZero(false);
      setTextOne(true);
    }, 1000);
    setTimeout(() => {
      setTextOne(false);
      setTextTwo(true);
    }, 2500);
    setTimeout(() => {
      setTextTwo(false);
      setTextThree(true);
    }, 4000);
    setTimeout(() => {
      setTextThree(false);
      setTextFour(true);
    }, 5500);
    setTimeout(() => {
      setTextFour(false);
      setTextFive(true);
    }, 7000);
    setTimeout(() => {
      setTextFive(false);
      setTextSix(true);
    }, 8500);
  }, []);

  return (
    <>
      <HomeContainer>
        <HeaderBar />

        {textZero === true ? (
          <>
            <HalfLeft />
            <TextContainer>
              <NameText>Tyler </NameText>
              <NameDotContainer>
                <NameText>Zhang </NameText>
                <Dot style={{ background: "#111111" }} />
              </NameDotContainer>
            </TextContainer>
            <HalfRight />
          </>
        ) : null}
        {textOne === true ? (
          <>
            <HalfLeft style={{ background: "#582C83" }}>
              <LeftTextContainer>
                <p>Western University</p>
                <p style={{ color: "transparent" }}>Ivey Business School</p>
                <p style={{ color: "transparent" }}>Deloitte</p>
                <p style={{ color: "transparent" }}>CPA, CA</p>
                <p style={{ color: "transparent" }}>
                  Photographer & World Explorer
                </p>
              </LeftTextContainer>
            </HalfLeft>
            <TextContainer>
              <NameText>Tyler </NameText>
              <NameDotContainer>
                <NameText>Zhang </NameText>
                <Dot style={{ background: "#582C83" }} />
              </NameDotContainer>
            </TextContainer>
            <HalfRight />
          </>
        ) : null}
        {textTwo === true ? (
          <>
            <HalfLeft style={{ background: "#034638" }}>
              <LeftTextContainer>
                <p>Western University</p>
                <p>Ivey Business School</p>
                <p style={{ color: "transparent" }}>Deloitte</p>
                <p style={{ color: "transparent" }}>CPA, CA</p>
                <p style={{ color: "transparent" }}>
                  Photographer & World Explorer
                </p>
              </LeftTextContainer>
            </HalfLeft>
            <TextContainer>
              <NameText>Tyler </NameText>
              <NameDotContainer>
                <NameText>Zhang </NameText>
                <Dot style={{ background: "#034638" }} />
              </NameDotContainer>
            </TextContainer>
            <HalfRight />
          </>
        ) : null}
        {textThree === true ? (
          <>
            <HalfLeft style={{ background: "#86bc25" }}>
              <LeftTextContainer>
                <p>Western University</p>
                <p>Ivey Business School</p>
                <p>Deloitte</p>
                <p style={{ color: "transparent" }}>CPA, CA</p>
                <p style={{ color: "transparent" }}>
                  Photographer & World Explorer
                </p>
              </LeftTextContainer>
            </HalfLeft>
            <TextContainer>
              <NameText>Tyler </NameText>
              <NameDotContainer>
                <NameText>Zhang </NameText>
                <Dot style={{ background: "#86bc25" }} />
              </NameDotContainer>
            </TextContainer>
            <HalfRight />
          </>
        ) : null}
        {textFour === true ? (
          <>
            <HalfLeft style={{ background: "#006fba" }}>
              <LeftTextContainer>
                <p>Western University</p>
                <p>Ivey Business School</p>
                <p>Deloitte</p>
                <p>CPA, CA</p>
                <p style={{ color: "transparent" }}>
                  Photographer & World Explorer
                </p>
              </LeftTextContainer>
            </HalfLeft>
            <TextContainer>
              <NameText>Tyler </NameText>
              <NameDotContainer>
                <NameText>Zhang </NameText>
                <Dot style={{ background: "#006fba" }} />
              </NameDotContainer>
            </TextContainer>
            <HalfRight />
          </>
        ) : null}
        {textFive === true ? (
          <>
            <HalfLeft style={{ background: "#798AA7" }}>
              <LeftTextContainer>
                <p>Western University</p>
                <p>Ivey Business School</p>
                <p>Deloitte</p>
                <p>CPA, CA</p>
                <p>Photographer & World Explorer</p>
              </LeftTextContainer>
            </HalfLeft>
            <TextContainer>
              <NameText>Tyler </NameText>
              <NameDotContainer>
                <NameText>Zhang </NameText>
                <Dot style={{ background: "#798AA7" }} />
              </NameDotContainer>
            </TextContainer>
            <HalfRight></HalfRight>
          </>
        ) : null}
        {textSix === true ? (
          <>
            <HalfLeft style={{ background: "#111111" }}>
              <LeftTextContainer>
                <p>Western University</p>
                <p>Ivey Business School</p>
                <p>Deloitte</p>
                <p>CPA, CA</p>
                <p>Photographer & World Explorer</p>
              </LeftTextContainer>
            </HalfLeft>
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
            <HalfRight>
              <RightTextContainer>
                <Typical
                  steps={["Full-Stack Developer", 1000]}
                  loop={Infinity}
                  wrapper="p"
                />
              </RightTextContainer>
            </HalfRight>
          </>
        ) : null}
      </HomeContainer>
    </>
  );
};

export default Home;
