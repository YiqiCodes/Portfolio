import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

export const HalfLeft = styled.div`
  width: 50vw;
  background: #eef2ed;
`;

export const LeftTextContainer = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #eef2ed;
`;

export const HalfRight = styled.div`
  width: 50vw;
  background: #eef2ed;
`;

export const RightTextContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: x-large;
  padding-left: 5rem;
`;

export const TextContainer = styled.div`
  align-self: center;
  z-index: 1;
  width: 0;
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.text`
  font-weight: 900;
  font-size: -webkit-xxx-large;
  margin-left: 1rem;
`;

export const NameDotContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  padding: 1rem 0px;
`;
export const Dot = styled.div`
  height: 20px;
  width: 20px;
  align-self: flex-end;
  margin-left: 10px;
  border-radius: 50%;
  background: #2a5859;
`;
