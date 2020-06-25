import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

export const HalfLeft = styled.div`
  width: 50vw;
  background: #2a5859;
`;

export const HalfRight = styled.div`
  width: 50vw;
  background: #eef2ed;
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
