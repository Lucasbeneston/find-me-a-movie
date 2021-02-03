import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

// Style
const IntroductionTitle = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`;
const Span = styled.span`
  font-weight: bolder;
  color: ${color.blueWhale};
`;

export default function TitleBeforeRandom() {
  return (
    <IntroductionTitle>
      <Span>Find me a movie</Span> est le moyen le plus simple de{" "}
      <Span>trouver un film lorsque vous n'avez aucune idée</Span> de ce que
      vous voulez regarder.
    </IntroductionTitle>
  );
}
