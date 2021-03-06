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
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
  animation: ${fadeIn} 0.5s ease-out;
`;

export default function PosterPath({ srcPosterPath, srcTitle }) {
  return (
    <>
      {srcPosterPath ? <Image src={srcPosterPath} alt={`${srcTitle}`} /> : null}
    </>
  );
}

// PropTypes
PosterPath.defaultProps = {
  srcPosterPath: null,
  srcTitle: null,
};
PosterPath.propTypes = {
  srcPosterPath: PropTypes.string,
  srcTitle: PropTypes.string,
};
