import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const VoteAverageValue = styled.h4`
  font-size: 1.8rem;
  margin-right: 10px;
`;

export default function MovieVoteAverage({ srcVoteAverage }) {
  return <VoteAverageValue>{srcVoteAverage}</VoteAverageValue>;
}

// PropTypes
MovieVoteAverage.defaultProps = {
  srcVoteAverage: 0,
};
MovieVoteAverage.propTypes = {
  srcVoteAverage: PropTypes.number,
};
