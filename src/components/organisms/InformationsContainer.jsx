import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import device from "../../styles/breakpoints";

// Components
import TitleBeforeRandom from "../atoms/TitleBeforeRandom";
import MovieTitle from "../atoms/MovieTitle";
import MovieGenresContainer from "../molecules/MovieGenresContainer";
import MovieVoteAverageContainer from "../molecules/MovieVoteAverageContainer";
import MovieDescription from "../atoms/MovieDescription";

// Style
const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
const Container = styled.div`
  width: 100%;
  min-height: calc(30vh - 30px); // 30px = Footer height
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10%;
  animation: ${fadeIn} 0.5s ease-out;
  padding-bottom: ${(props) => (props.active ? "100px" : "0")};
  z-index: 151;

  @media ${device.portraitBrowserPage} {
    padding: 5px 15%;
    padding-bottom: ${(props) => (props.active ? "100px" : "0")};
  }
  @media ${device.desktop} {
    padding: 5px 25%;
    padding-bottom: ${(props) => (props.active ? "100px" : "0")};
  }
`;

export default function InformationsContainer({
  startRandom,
  srcTotalResults,
  srcTitle,
  srcReleaseDate,
  srcGenresArray,
  srcVoteAverage,
  srcOverview,
}) {
  return (
    <Container active={startRandom}>
      {!startRandom ? (
        <TitleBeforeRandom srcTotalResults={srcTotalResults} />
      ) : (
        <>
          <MovieTitle srcTitle={srcTitle} srcReleaseDate={srcReleaseDate} />
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
  srcTotalResults: 8000,
  srcTitle: null,
  srcReleaseDate: null,
  srcGenresArray: [],
  srcVoteAverage: null,
  srcOverview: null,
};
InformationsContainer.propTypes = {
  startRandom: PropTypes.bool,
  srcTotalResults: PropTypes.number,
  srcTitle: PropTypes.string,
  srcReleaseDate: PropTypes.string,
  srcGenresArray: PropTypes.arrayOf(PropTypes.number),
  srcVoteAverage: PropTypes.number,
  srcOverview: PropTypes.string,
};
