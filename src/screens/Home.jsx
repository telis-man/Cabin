// import { Link } from "react-router-dom";
import {
  HeaderContainer,
  PrimaryHeaderText,
  SecondaryHeaderText,
} from "./styled/header.styled";
import { useEffect, useState } from "react";

export const Home = () => {
  const [setprimaryHeaderTextLetterSpacing, primaryHeaderTextLetterSpacing] =
    useState(null);

  const calculateprimaryHeaderTextLetterSpacing = () => {};

  useEffect(() => {
    calculateprimaryHeaderTextLetterSpacing();
  });
  return (
    <>
      <HeaderContainer>
        <SecondaryHeaderText>
          The new breed of creative production studio
        </SecondaryHeaderText>

        <PrimaryHeaderText>Shizo</PrimaryHeaderText>
        {/* <p style={{ color: "white", gridRow: 2, alignSelf: "end" }}>Hello</p> */}
      </HeaderContainer>
    </>
  );
};

export default Home;
