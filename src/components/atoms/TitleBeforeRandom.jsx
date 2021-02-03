import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import color from "../../styles/variables";
import device from "../../styles/breakpoints";

// Style
const IntroductionTitle = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  line-height: 2rem;

  @media ${device.tablet} {
    padding: 0 5%;
    line-height: 2.75rem;
  }

  @media ${device.desktop} {
    padding: 0 15%;
  }
`;
const Span = styled.span`
  font-weight: bolder;
  color: ${color.blueWhale};
`;

export default function TitleBeforeRandom({ srcTotalResults }) {
  return (
    <IntroductionTitle>
      Marre de galérer à trouver un film à regarder ?{" "}
      <Span>Find me a movie</Span> sélectionne <Span>de manière aléatoire</Span>{" "}
      des films parmi une liste de <Span>{srcTotalResults} films</Span> les
      mieux notés !
    </IntroductionTitle>
  );
}

// PropTypes
TitleBeforeRandom.defaultProps = {
  srcTotalResults: 8000,
};
TitleBeforeRandom.propTypes = {
  srcTotalResults: PropTypes.number,
};
