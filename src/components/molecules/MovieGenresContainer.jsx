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
  const genresId = [
    { id: 12, name: "Aventure" },
    { id: 14, name: "Fantastique" },
    { id: 16, name: "Animation" },
    { id: 18, name: "Drame" },
    { id: 27, name: "Horreur" },
    { id: 28, name: "Action" },
    { id: 35, name: "Comédie" },
    { id: 36, name: "Histoire" },
    { id: 37, name: "Western" },
    { id: 53, name: "Thriller" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentaire" },
    { id: 878, name: "Science-Fiction" },
    { id: 9648, name: "Mystère" },
    { id: 10402, name: "Musique" },
    { id: 10749, name: "Romance" },
    { id: 10751, name: "Familial" },
    { id: 10752, name: "Guerre" },
    { id: 10770, name: "Téléfilm" },
  ];

  const currentGenre = Object.values(srcGenresArray).map((genre) => genre);

  const matchGenres = genresId.filter((genre) =>
    currentGenre.includes(genre.id)
  );

  return (
    <Container>
      {matchGenres.map((genre) => (
        <MovieGenre key={genre.id}>{genre.name}</MovieGenre>
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
