import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eef2ed;
`;

export const ProjectContainer = styled.div`
  width: 50vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #111111;
  color: #eef2ed;
`;

export const ProjectContainerRight = styled.div`
  width: 50vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eef2ed;
`;

export const Project = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const ProjectImgDiv = styled.div`
  height: 35%;
  max-width: 50vw;
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 0px;
    width: 0px;
  }
  @media screen and (max-height: 575px) {
    height: 0px;
    width: 0px;
  }
`;

export const ProjectImg = styled.img`
  height: 50%;
  padding: 2px;
`;

export const ProjectDetailsDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  margin: 2px;
`;

export const TextOneDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const TextOne = styled.div`
  font-size: x-large;
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
  padding: 4px 0;
  text-align: end;
  padding-right: 10px;
  @media screen and (max-width: 767px) {
    font-size: small;
  }
`;

export const TextTwo = styled.div`
  font-size: larger;
  font-weight: 500;
  padding: 4px 0;
  display: flex;
  justify-content: flex-end;
  text-align: end;
  padding-right: 10px;
  @media screen and (max-width: 767px) {
    font-size: x-small;
  }
`;
export const TextThree = styled.div`
  font-size: small;
  display: flex;
  justify-content: flex-end;
  text-align: end;
  padding-right: 10px;
  @media screen and (max-width: 767px) {
    font-size: xx-small;
    margin: 10px 0px;
    width: 100%;
  }
`;

export const TextThreeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: flex-end;
  width: 90%;
  min-height: 20%;
  padding-right: 10px;
`;

export const ProjectButton = styled.button`
  width: 35%;
  padding: 4px 8px;
  margin: 8px 4px;
  box-shadow: 0px 1px 0px 0px #1c1b18;
  background: linear-gradient(to bottom, #535353 5%, #111111 100%);
  background-color: #535353;
  border-radius: 15px;
  border: 2px solid #333029;
  display: inline-block;
  cursor: pointer;
  color: #eef2ed;
  font-family: spartan;
  font-size: 14px;
  padding: 12px 16px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;

  :hover {
    background: linear-gradient(to bottom, #111111 5%, #535353 100%);
    background-color: #111111;
  }
  @media screen and (max-width: 767px) {
    width: 10rem;
  }
`;
