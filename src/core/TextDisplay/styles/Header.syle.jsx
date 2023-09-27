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
  width: 100vw;
  color: blue;
`;
