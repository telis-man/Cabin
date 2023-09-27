// import { Link } from "react-router-dom";

import {
  StyledHeader,
  MainTextHeader,
} from "../core/TextDisplay/styles/Header.syle";

export const Home = () => {
  return (
    <>
      <StyledHeader
        font="primary"
        size="large"
        fontWeight="900"
        textColor="text"
      >
        The new breed of creative production studio
      </StyledHeader>
      <MainTextHeader
        font="primary"
        size="display"
        fontWeight="900"
        textColor="text"
      >
        Vortex
      </MainTextHeader>
    </>
  );
};

export default Home;
