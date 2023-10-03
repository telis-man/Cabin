// import { Link } from "react-router-dom";

import {
  StyledHeader,
  MainTextHeader,
  ContainerTopRightThird,
  HeaderContainer,
  MainTextHeaderContainer,
} from "../core/TextDisplay/styles/Header.syle";

export const Home = () => {
  return (
    <>
      <HeaderContainer>
        <ContainerTopRightThird>
          <StyledHeader
            font="primary"
            size="medium"
            fontWeight="900"
            textColor="text"
          >
            The new breed of creative production studio
          </StyledHeader>
        </ContainerTopRightThird>

        <MainTextHeaderContainer>
          <MainTextHeader
            font="primary"
            size="display"
            fontWeight="900"
            textColor="text"
          >
            Vortex
          </MainTextHeader>
        </MainTextHeaderContainer>
      </HeaderContainer>
    </>
  );
};

export default Home;
