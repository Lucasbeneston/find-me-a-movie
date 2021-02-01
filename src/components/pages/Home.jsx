import React, { useState } from "react";
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
  const [selectMovie, setSelectMovie] = useState({
    page: 1,
    selectInPage: 0,
  });
  const { page, selectInPage } = selectMovie;

  // Random number between 2 values
  const entierAleatoire = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const fetchMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=fr&page=${page}`
    );
    return res.json();
  };

  const { data, status, refetch } = useQuery("movie", fetchMovie);

  const handleStart = () => {
    setSelectMovie({
      page: entierAleatoire(1, 417),
      selectInPage: entierAleatoire(0, 19),
    });
    refetch();
    if (!startRandom) setStartRandom(true);
  };

  return (
    <Section>
      <BackdropPathContainer
        startRandom={startRandom}
        srcBackdropPath={
          status === "success" && data.results[selectInPage].backdrop_path
        }
        srcPosterPath={
          status === "success" && data.results[selectInPage].poster_path
        }
        srcTitle={status === "success" && data.results[selectInPage].title}
      />
      <InformationsContainer
        startRandom={startRandom}
        srcTitle={status === "success" && data.results[selectInPage].title}
        srcGenresArray={
          status === "success" && data.results[selectInPage].genres
        }
        srcVoteAverage={
          status === "success" && data.results[selectInPage].vote_average
        }
        srcOverview={
          status === "success" && data.results[selectInPage].overview
        }
      />
      <SearchButton
        onClickEvent={handleStart}
        title={!startRandom ? "Commencer" : "Relancer"}
      />
    </Section>
  );
}
