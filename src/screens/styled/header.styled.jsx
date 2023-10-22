import styled from "styled-components";
import { TextHeading } from "../../core/styled/textHeading.styled";

export const HeaderContainer = styled.div`
  height: 100%;
  overflow: hidden;
  border: 1px solid yellow;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const PrimaryHeaderText = styled(TextHeading)`
  font-size: 21vw;
  text-align: center;
  grid-row: 2;
  grid-column: span 2;
  align-self: end;
  line-height: 1.1em;
  transform: scaleY(1.5); /* This will vertically stretch the text */
`;

export const SecondaryHeaderText = styled(TextHeading)`
  grid-row: 1;
  grid-column: 2;
  align-self: center;
  margin-right: 14vw;
`;
