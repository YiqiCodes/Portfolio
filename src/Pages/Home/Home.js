import React, { useState, useEffect } from "react";

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
} from "./Home.styles.js";

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
    }, 4500);
    setTimeout(() => {
      setTextThree(false);
      setTextFour(true);
    }, 6500);
    setTimeout(() => {
      setTextFour(false);
      setTextFive(true);
    }, 8500);
    setTimeout(() => {
      setTextFive(false);
      setTextSix(true);
    }, 10500);
  }, []);
  return (
    <>
      <HomeContainer>
        {textZero === true ? (
          <>
            <HalfLeft />
            <TextContainer>
              <NameText>Tyler </NameText>
              <NameDotContainer>
                <NameText>Zhang </NameText>
                {/* <Dot style={{ background: "#111111" }} /> */}
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
                <Dot style={{ background: "#111111" }} />
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
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    alignSelf: "flex-end",
                    marginLeft: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={RainbowCircle}
                    alt=""
                  ></img>
                </div>
              </NameDotContainer>
            </TextContainer>
            <HalfRight>
              <RightTextContainer>Full-Stack Web Developer</RightTextContainer>
            </HalfRight>
          </>
        ) : null}
      </HomeContainer>
    </>
  );
};

export default Home;
