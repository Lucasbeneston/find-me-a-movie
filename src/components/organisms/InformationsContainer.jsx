import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import TitleBeforeRandom from "../atoms/TitleBeforeRandom";
import MovieTitle from "../atoms/MovieTitle";
import MovieGenresContainer from "../molecules/MovieGenresContainer";
import MovieVoteAverageContainer from "../molecules/MovieVoteAverageContainer";
import MovieDescription from "../atoms/MovieDescription";

// Style
const Container = styled.div`
  width: 100%;
  min-height: calc(30vh - 30px); // 30px = Footer height
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10%;
`;

export default function InformationsContainer({
  startRandom,
  srcTitle,
  srcGenresArray,
  srcVoteAverage,
  srcOverview,
}) {
  return (
    <Container>
      {!startRandom ? (
        <TitleBeforeRandom />
      ) : (
        <>
          <MovieTitle srcTitle={srcTitle} />
          <MovieGenresContainer srcGenresArray={srcGenresArray} />
          <MovieVoteAverageContainer srcVoteAverage={srcVoteAverage} />
          <MovieDescription srcOverview={srcOverview} />
        </>
      )}
    </Container>
  );
}

// PropTypes
InformationsContainer.defaultProps = {
  startRandom: null,
  srcTitle: null,
  srcGenresArray: [],
  srcVoteAverage: 0,
  srcOverview: null,
};
InformationsContainer.propTypes = {
  startRandom: PropTypes.bool,
  srcTitle: PropTypes.string,
  srcGenresArray: PropTypes.arrayOf(PropTypes.string),
  srcVoteAverage: PropTypes.number,
  srcOverview: PropTypes.string,
};
