// import { Link } from "react-router-dom";
import {
  HeaderContainer,
  PrimaryHeaderText,
  PrimaryHeaderTextContainer,
  SecondaryHeaderText,
} from "./styled/header.styled";
import { useEffect, useState, useRef } from "react";

export const Home = () => {
  const [primaryHeaderTextLetterSpacing, setprimaryHeaderTextLetterSpacing] =
    useState(null);

  const headerContainerRef = useRef();
  const primaryHeaderTextRef = useRef();

  const calculateprimaryHeaderTextLetterSpacing = () => {
    const lengthH1 = primaryHeaderTextRef.current.textContent.length;
    const containerWidth = headerContainerRef.current.offsetWidth;
    const textContentWidth = primaryHeaderTextRef.current.offsetWidth;

    console.log(containerWidth);
    console.log(textContentWidth);

    const totalSpacing =
      containerWidth - primaryHeaderTextRef.current.scrollWidth;
    const letterSpacingValue = (containerWidth - textContentWidth) / lengthH1;

    return letterSpacingValue;
  };

  useEffect(() => {
    const value = calculateprimaryHeaderTextLetterSpacing;
    setprimaryHeaderTextLetterSpacing(value);
  }, []);

  useEffect(() => {
    console.log(primaryHeaderTextLetterSpacing);
  }, [primaryHeaderTextLetterSpacing]);
  return (
    <>
      <HeaderContainer ref={headerContainerRef}>
        <SecondaryHeaderText>
          The new breed of creative production studio
        </SecondaryHeaderText>

        <PrimaryHeaderTextContainer>
          <PrimaryHeaderText
            ref={primaryHeaderTextRef}
            letterSpacingValue={primaryHeaderTextLetterSpacing}
          >
            kawasaki
          </PrimaryHeaderText>
          {/* <p style={{ color: "white", gridRow: 2, alignSelf: "end" }}>Hello</p> */}
        </PrimaryHeaderTextContainer>
      </HeaderContainer>
    </>
  );
};

export default Home;
