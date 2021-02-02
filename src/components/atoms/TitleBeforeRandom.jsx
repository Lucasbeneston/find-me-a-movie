import React from "react";
import styled from "styled-components";

// Style
const IntroductionTitle = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`;

export default function TitleBeforeRandom() {
  return (
    <IntroductionTitle>
      "Find me a movie" est le moyen le plus simple de trouver un film lorsque
      vous n'avez aucune idée de ce que vous voulez regarder.
    </IntroductionTitle>
  );
}
