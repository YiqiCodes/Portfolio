import React from "react";

// Styles
import {
  HomeContainer,
  HalfLeft,
  HalfRight,
  TextContainer,
  NameText,
  Dot,
  NameDotContainer,
} from "./Home.styles.js";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HalfLeft />
        <TextContainer>
          <NameText>Tyler </NameText>
          <NameDotContainer>
            <NameText>Zhang </NameText>
            <Dot />
          </NameDotContainer>
        </TextContainer>
        <HalfRight />
      </HomeContainer>
    </>
  );
};

export default Home;
