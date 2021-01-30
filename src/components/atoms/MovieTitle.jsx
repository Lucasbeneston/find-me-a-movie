import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
`;
export default function MovieTitle({ srcTitle }) {
  return <Title>{srcTitle}</Title>;
}

// PropTypes
MovieTitle.defaultProps = {
  srcTitle: null,
};
MovieTitle.propTypes = {
  srcTitle: PropTypes.string,
};
