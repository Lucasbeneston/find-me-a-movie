import React, { useState } from "react";
import styled from "styled-components";

// Components
import BackdropPathContainer from "../organisms/BackdropPathContainer";
import InformationsContainer from "../organisms/InformationsContainer";
import SearchButton from "../atoms/SearchButton";

// Styles
const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 30px);
`;

export default function Home() {
  const [startRandom, setStartRandom] = useState(false);
  const [filmInformations, setFilmInformations] = useState({
    posterPath:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zDyT3gIeae39UgL9P6jL5Zc3zyt.jpg",
    backdropPath:
      "https://cdn-www.konbini.com/fr/images/files/2019/10/will-joker-be-coming-to-netflix-.jpg?webp=",

    title: "Joker",
    genres: ["Crime", "Thriller", "Drame"],
    voteAverage: 8.2,
    description:
      "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
  });

  const {
    posterPath,
    backdropPath,
    title,
    genres,
    voteAverage,
    description,
  } = filmInformations;

  console.log(setFilmInformations);

  const handleStart = () => {
    if (!startRandom) setStartRandom(true);
  };

  return (
    <Section>
      <BackdropPathContainer
        startRandom={startRandom}
        srcBackdropPath={backdropPath}
        srcPosterPath={posterPath}
        srcTitle={title}
      />
      <InformationsContainer
        startRandom={startRandom}
        srcTitle={title}
        srcGenresArray={genres}
        srcVoteAverage={voteAverage}
        srcDescription={description}
      />
      <SearchButton
        onClickEvent={handleStart}
        description={!startRandom ? "Start random" : "New random"}
      />
    </Section>
  );
}
