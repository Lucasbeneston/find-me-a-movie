import React from "react";
import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";
import color from "../../styles/variables";

// Components
import FadeEffectBackground from "../atoms/FadeEffectBackground";
import BackdropPath from "../atoms/BackdropPath";
import PosterPathContainer from "../molecules/PosterPathContainer";

// Styles
const colorVariation = keyframes`
0% {
  color: ${color.blueWhale};
}
35% {
  color: ${color.ceruleanBlue};
}
65% {
  color: ${color.javaGreen};
}
100% {
  color: ${color.blueWhale};
}
`;
const animation = css`
  animation: ${colorVariation} 50s infinite linear;
`;
const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.active ? "50vh" : "70vh")};
  color: ${color.blueWhale};
  ${(props) => (props.active ? null : animation)}
  background-color: currentColor;
  position: relative;
  transition: height 0.5s ease-out;
`;

export default function BackdropPathContainer({
  srcBackdropPath,
  startRandom,
  srcPosterPath,
  srcTitle,
}) {
  return (
    <Container active={startRandom}>
      {!startRandom ? null : (
        <BackdropPath srcBackdropPath={srcBackdropPath} srcTitle={srcTitle} />
      )}
      <FadeEffectBackground />
      <PosterPathContainer
        startRandom={startRandom}
        srcPosterPath={srcPosterPath}
        srcTitle={srcTitle}
      />
    </Container>
  );
}

// PropTypes
BackdropPathContainer.defaultProps = {
  startRandom: null,
  srcBackdropPath: null,
  srcPosterPath: null,
  srcTitle: null,
};
BackdropPathContainer.propTypes = {
  startRandom: PropTypes.bool,
  srcBackdropPath: PropTypes.string,
  srcPosterPath: PropTypes.string,
  srcTitle: PropTypes.string,
};
