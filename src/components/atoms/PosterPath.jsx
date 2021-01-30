import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Style
const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
`;

export default function PosterPath({ srcPosterPath, srcTitle }) {
  return (
    <Image src={srcPosterPath} alt={`${srcTitle} movie poster illustration`} />
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
