import styled from "styled-components";

const StyledHeader = styled.h1`
  font-family: ${(props) => props.theme.fonts[props.font]};
  font-size: ${(props) => props.theme.fontSizes[props.size] || "2rem"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  color: ${(props) => props.theme.colors[props.textColor] || "#ffffff"};
  margin: 0;
  padding: 0;
`;

export default StyledHeader;
