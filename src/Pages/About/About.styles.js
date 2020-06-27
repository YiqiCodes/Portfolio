import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eef2ed;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 30%;
  background: transparent;
  @media screen and (max-width: 767px) {
    font-size: small;
  }
  @media screen and (max-width: 376px) {
    font-size: x-small;
  }
`;
export const AboutContentContainer = styled.div`
  width: 50%;
  height: 100%;
  left: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: #111111;
  color: #eef2ed;
`;

export const SummaryContainer = styled.div`
  background: transparent;
  padding: 0 2rem;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 767px) {
    color: transparent;
    height: 0px;
  }
  @media screen and (max-height: 575px) {
    color: transparent;
  }
`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 50vw;
  padding: 4px 0;
`;
export const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;
`;
export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  padding: 0.5rem;
`;

export const ProfilePictureContainer = styled.img`
  width: 8rem;
  height: 10rem;
  @media screen and (max-width: 767px) {
    width: 0px;
    height: 0px;
  }
`;

export const Details = styled.div`
  padding: 1rem;
`;

export const SocialIconDiv = styled.div``;
export const SocialImg = styled.img`
  width: 25px;
  height: 25px;
`;
