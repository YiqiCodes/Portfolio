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
  background: #eef2ed;
`;

export const Project = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const ProjectImgDiv = styled.div`
  height: 30%;
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
`;

export const TextTwo = styled.div`
  font-size: larger;
  font-weight: 500;
  padding: 4px 0;
  display: flex;
  justify-content: flex-end;
  text-align: end;
`;
export const TextThree = styled.div`
  font-size: small;
  display: flex;
  justify-content: flex-end;
  text-align: end;
`;

export const TextThreeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: flex-end;
  width: 90%;
  min-height: 20%;
`;
