import styled from "styled-components";

export const StyledHeader = styled.h1`
  font-family: ${(props) => props.theme.fonts[props.font]};
  font-size: ${(props) => props.theme.fontSizes[props.size] || props.size};
  font-weight: ${(props) => props.fontWeight || "bold"};
  color: ${(props) => props.theme.colors[props.textColor] || props.textColor};
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;
export const MainTextHeader = styled(StyledHeader)`
  font-size: 21vw;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  border: 2px solid yellow;
  display: grid;
`;

export const ContainerTopRightThird = styled.div`
  width: 40%;
  border: 1px solid red;
  // margin-top: 15vh;
  // margin-right: 10vh;
`;
export const MainTextHeaderContainer = styled.div`
  border: 1px solid green;
`;
