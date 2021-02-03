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
      Vous n'avez aucune idée de film à regarder ? Pas de problème !{" "}
      <Span>Find me a movie</Span> vous permet de trouver un film{" "}
      <Span>de manière aléatoire</Span> parmis une liste de{" "}
      <Span>8329 films</Span> les mieux notés !
    </IntroductionTitle>
  );
}
