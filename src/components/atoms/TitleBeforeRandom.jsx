import React from "react";
import styled from "styled-components";

// Style
const IntroductionTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
`;

export default function TitleBeforeRandom() {
  return (
    <IntroductionTitle>
      "Find me a movie" is the easiest way to find a movie when you don't know
      what to watch.
    </IntroductionTitle>
  );
}
