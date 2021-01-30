import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Style
const Description = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin: 15px 0;
`;

export default function MovieDescription({ srcDescription }) {
  return <Description>{srcDescription}</Description>;
}

// PropTypes
MovieDescription.defaultProps = {
  srcDescription: null,
};
MovieDescription.propTypes = {
  srcDescription: PropTypes.string,
};
