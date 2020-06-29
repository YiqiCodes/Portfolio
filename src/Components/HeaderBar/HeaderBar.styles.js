import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 2rem;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    width: 100%;
    background: #f1f1f1;
    z-index: 1;
  }
`;
