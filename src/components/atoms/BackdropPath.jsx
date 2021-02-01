import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

// Style

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const Image = styled.img`
  animation: ${fadeIn} 0.5s ease-out;
  height: 100%;
  object-fit: cover;
`;

export default function BackdropPath({ srcBackdropPath, srcTitle }) {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/w500/${srcBackdropPath}`}
      alt={`${srcTitle} movie illustration`}
    />
  );
}

// PropTypes
BackdropPath.defaultProps = {
  srcBackdropPath: null,
  srcTitle: null,
};
BackdropPath.propTypes = {
  srcBackdropPath: PropTypes.string,
  srcTitle: PropTypes.string,
};
