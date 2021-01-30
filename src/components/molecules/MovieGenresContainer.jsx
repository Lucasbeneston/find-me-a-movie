import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import color from "../../styles/variables";

// Styles
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
const MovieGenre = styled.h3`
  font-size: 1.4rem;
  padding: 3px 10px;
  border-radius: 20px;
  margin: 5px;
  color: ${color.doveGray};
  border: solid 1px ${color.doveGray};
`;

export default function MovieGenresContainer({ srcGenresArray }) {
  return (
    <Container>
      {srcGenresArray.map((genre) => (
        <MovieGenre key={genre}>{genre}</MovieGenre>
      ))}
    </Container>
  );
}

// PropTypes
MovieGenresContainer.defaultProps = {
  srcGenresArray: [],
};
MovieGenresContainer.propTypes = {
  srcGenresArray: PropTypes.arrayOf(PropTypes.string),
};
