import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import device from "../../styles/breakpoints";

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

  @media ${device.portraitBrowserPage} {
    width: 100%;
  }
`;

export default function BackdropPath({ srcBackdropPath, srcTitle }) {
  return (
    <>
      {srcBackdropPath ? (
        <Image src={srcBackdropPath} alt={`${srcTitle} movie illustration`} />
      ) : null}
    </>
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
