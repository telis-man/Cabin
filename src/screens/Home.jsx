// import { Link } from "react-router-dom";

import StyledHeader from "../core/TextDisplay/styles/Header.syle";

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
      <StyledHeader
        font="primary"
        size="headline"
        fontWeight="900"
        textColor="text"
      >
        Vortex
      </StyledHeader>
    </>
  );
};

export default Home;
