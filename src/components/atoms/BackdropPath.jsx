import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Style
const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

export default function BackdropPath({ srcBackdropPath, srcTitle }) {
  return <Image src={srcBackdropPath} alt={`${srcTitle} movie illustration`} />;
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
