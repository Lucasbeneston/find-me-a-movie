import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MovieVoteAverage from "../atoms/MovieVoteAverage";
import VoteAverageProgressBar from "../atoms/VoteAverageProgressBar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MovieVoteAverageContainer({ srcVoteAverage }) {
  return (
    <Container>
      <MovieVoteAverage srcVoteAverage={srcVoteAverage} />
      <VoteAverageProgressBar srcVoteAverage={srcVoteAverage} />
    </Container>
  );
}

// PropTypes
MovieVoteAverageContainer.defaultProps = {
  srcVoteAverage: null,
};
MovieVoteAverageContainer.propTypes = {
  srcVoteAverage: PropTypes.number,
};
