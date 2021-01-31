import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
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
  const [movieId, setMovieId] = useState(12);

  const entierAleatoire = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const handleStart = () => {
    setMovieId(entierAleatoire(1, 2000));
    if (!startRandom) setStartRandom(true);
  };

  const fetchMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.json();
  };

  const { data, status, refetch } = useQuery("movie", fetchMovie);

  useEffect(() => {
    refetch();
  }, [movieId]);

  useEffect(() => {
    if (data && data.title === undefined) {
      console.log("TITRE INTROUVABLE");
      setMovieId(entierAleatoire(1, 2000));
    }
  }, [data]);

  return (
    <Section>
      <BackdropPathContainer
        startRandom={startRandom}
        srcBackdropPath={status === "success" && data.backdrop_path}
        srcPosterPath={status === "success" && data.poster_path}
        srcTitle={status === "success" && data.title}
      />
      <InformationsContainer
        startRandom={startRandom}
        srcTitle={status === "success" && data.title}
        srcGenresArray={status === "success" && data.genres}
        srcVoteAverage={status === "success" && data.vote_average}
        srcOverview={status === "success" && data.overview}
      />
      <SearchButton
        onClickEvent={handleStart}
        title={!startRandom ? "Start random" : "New random"}
      />
    </Section>
  );
}
